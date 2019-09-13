import React, {Component} from 'react';
import {getTopClothes} from './getRandomClothes.js';

class Top_clothes extends Component{
    state = {
            pictureURL: null,
        }

        componentDidMount(){
            getTopClothes.bind(this)();
    }

    render(){
        const {pictureURL} = this.state;

        if (pictureURL == null){
            return(
                <div className="col-6 text-center">
                    Вот это сверху
                    <div className="line"></div>
                    <h4>Загрузите фотографии одежды в гардеробную!</h4>
                </div>
            )
        }

        return(
            <div className="col-6 text-center">
                Вот это сверху
                <div className="line"></div>
                <img width="250px" src={pictureURL} />
            </div>
        );
    }
}

export default Top_clothes;