import React, {Component} from 'react';
const config = require('./config.json');

class Info extends Component{
    constructor(props){
        super(props);

        this.state={
            temperature: '',
            weather: '',
            translate:{
                'clear sky': 'чистое небо',
                'scattered clouds': 'редкие облака',
                'light rain': 'легкий дождь',
                'heavy intensity rain': 'интенсивный дождь',
                'moderate rain': 'умеренный дождь',
                'broken clouds': 'облачно',
                'overcast clouds': 'пасмурно',
                'few clouds': 'слегка облачно',
                'Rain' : 'дождь',
            }
        }
    }

    componentDidMount(){
        const appid = config.appid;
        const url = "http://api.openweathermap.org/data/2.5/weather?q=saint%20petersburg&appid=" + appid;
        this.getTheTemperature(url);
    }

    getTheTemperature(url){
        fetch(url) 
        .then(response => response.json())
        .then(parsedJSON => {
            this.setState({
                temperature: parsedJSON.main.temp,
                weather: parsedJSON.weather[0].main,
            });
        });
    }

    render(){
        const {temperature} = this.state;
        let temperatureInCelcium = Math.round(temperature - 273);
        const {weather} = this.state;
        const {translate} = this.state;
        
            return (
                <div className="text-center mb-5"><h3>Сегодня {temperatureInCelcium} градусов и {translate[weather]}</h3></div>
            );
    }
}

export default Info;