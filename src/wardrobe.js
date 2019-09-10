import React, {Component} from 'react';

class Wardrobe extends Component {
    state = {
        pictures: [],
        selectedFile: null,
    };

    componentDidMount(){
        this.getPictures();
    };

    getPictures = async () => {
        const response = await fetch('http://localhost:4000');
        const images = await response.json();
        this.setState({
            pictures: images.data,
        });
    };

    renderPictures = ({id, url}) => {
        const picStyle ={
            'maxWidth': '240px',
        }

    return(<div style={picStyle} key={id} className="col-6 justify-content-center"><img width="240px" src={url}/></div>);
    }

    loadToDb = url => {
        if(url){
            fetch('http://localhost:4000/add?url="' + url + '"');
        } else{
            console.log("that's a problem");
        }
    }

    fileSelected = event =>{
        this.setState({
            selectedFile: event.target.files[0],
            });
        };

    uploadPicture = () => {
        const fd = new FormData();
        const image = this.state.selectedFile;

        fd.append('image', image);
        fetch('https://api.imgur.com/3/image/', {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID 8b1050989807526'
            },
            body: fd,
        })
        .then(response => response.json())
        .then(responseJSON => {
            this.loadToDb(responseJSON.data.link);
        })
        .then(this.getPictures);
    };

    render(){
        const {pictures} = this.state;

        return(
            <div className="container col-9 text-center">
                <h1>Это твоя гардеробная</h1>
                <div className="row">
                    {pictures.map(this.renderPictures)}
                </div>
                <h3>Добавить новую одежду</h3>
                <input type="file" onChange={this.fileSelected} />
                <button onClick={this.uploadPicture}>Загрузить</button>
            </div>
        );
    };
};

export default Wardrobe;