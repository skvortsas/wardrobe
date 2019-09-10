import React, {Component} from 'react'

class Info extends Component{
    constructor(props){
        super(props);

        this.state={
            temperature: '',
            weather: [],
        }
    }

    componentDidMount(){
        const url = "http://api.openweathermap.org/data/2.5/weather?q=saint%20petersburg&appid=d83aa69884ffe7bbc9eb3a22173bf01a";
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
        })
    }

    render(){
        const {temperature} = this.state;
        let temperatureInCelcium = Math.round(temperature - 273);
        const {weather} = this.state;
        
            return (
                <div className="text-center mb-5"><h3>Сегодня {temperatureInCelcium} градусов и {weather}</h3></div>
            );
    }
}

export default Info;