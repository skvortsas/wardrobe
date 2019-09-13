import React, {Component} from 'react';
const config = require('./config.json');

class Wardrobe extends Component {
    state = {
        pictures: [],
        selectedFile: null,
        selectedName: 'tShirt',
        hood: false,
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
            fetch('http://localhost:4000/add?url="' + url + '"&name="'+ this.state.selectedName +'"&hood='+ this.state.hood);
        } else{
            console.log("You need to get a URL for your picture!");
        }
    }

    fileSelected = event =>{
        this.setState({
            selectedFile: event.target.files[0],
            });
        };

    getName = event => {
        this.setState({
            selectedName: event.target.value,
        });
    }

    getHood = event => {
        this.setState({
            hood: event.target.checked,
        });
    }

    uploadPicture = () => {
        const fd = new FormData();
        const image = this.state.selectedFile;
        const authorization = config.authorization;

        fd.append('image', image);
        fetch('https://api.imgur.com/3/image/', {
            method: 'POST',
            headers: {
                Authorization: authorization,
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
                <div className="rounded border border-dark justify-content-center">
                    <div className="mb-3 row justify-content-around">
                        <input className="col-4" type="file" onChange={this.fileSelected} />
                        <select className="col-3" onChange={this.getName}>
                            <option vlaue="tShirt">Футболка</option>
                            <option value="sweater">Кофта</option>
                            <option value="shirt">Рубашка</option>
                            <option value="jacket">Пиджак</option>
                            <option value="dress">Платье</option>
                            <option value="jeans">Джинсы</option>
                            <option value="breeches">Брюки</option>
                            <option value="skirt">Юбка</option>
                        </select>
                        <div className="col-2">
                            <input type="checkbox" id="hood" onChange={this.getHood} />
                            <label htmlFor="hood">Капюшон</label>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <button onClick={this.uploadPicture}>Загрузить</button>
                </div>
            </div>
        );
    };
};

export default Wardrobe;