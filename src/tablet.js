import React, {Component} from 'react';
import Info from './info.js';
import Advise from './advise.js';

class Tablet extends Component{
    render(){
        return(
        <div className="container rounded-bottom p-5 col-9 bg-secondary">
            <Info />
            <Advise />
        </div>
        );
    }
}

export default Tablet;