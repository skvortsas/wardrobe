import React, {Component} from 'react';
import {getBottomClothes} from './getRandomClothes.js';

class Bottom_clothes extends Component{
    state ={
        pictureURL: null,
    }

    componentDidMount(){
        getBottomClothes.bind(this)();
    }

    render(){
        const {pictureURL} = this.state;
        
                if (pictureURL == null){
                    return(
                        <div className="col-6 text-center">
                            Вот это снизу
                            <div className="line"></div>
                            <h4>Загрузите фотографии одежды в гардеробную!</h4>
                        </div>
                    )
                }

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