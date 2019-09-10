import React, {Component} from 'react';

class Bottom_clothes extends Component{
    state ={
        pictureURL: null,
    }

    componentDidMount(){
        this.getRandomClothes();
    }

    getRandomClothes = async () => {
        let randomClothes = Math.round(Math.random()*9);
        const response = await fetch('http://localhost:4000');
        const data = await response.json();
        this.setState({
            pictureURL: data.data[randomClothes].url,
        });
    }

    render(){
        const {pictureURL} = this.state;
        
                return(
                    <div className="col-6 text-center">
                        Вот это снизу
                        <div className="line"></div>
                        <img width="250px" src={pictureURL} />
                    </div>
                );
    }
}

export default Bottom_clothes;