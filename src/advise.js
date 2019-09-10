import React, {Component} from 'react';
import Top_clothes from './top_clothes';
import Bottom_clothes from './bottom_clothes';

class Advise extends Component{
    render(){
        return(
            <div className="text-center">
                <h4>Я тебе сегодня советую надеть:</h4>
                <div className="row mt-5">
                    <Top_clothes />
                    <Bottom_clothes />
                </div>
            </div>
        );
    }
}

export default Advise;