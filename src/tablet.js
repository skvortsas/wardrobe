import React, {Component} from 'react';
import Info from './info.js';
import Advise from './advise.js';
import axios from 'axios';

class Tablet extends Component{
    state={
        selectedFile: null,
        url: '',
    }

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