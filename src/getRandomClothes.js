export async function getTopClothes(){
    const randomClothes = await getRandomClothes();
    const topClothes = randomClothes[0];

    if (topClothes.length >0){
        let randomClothes = Math.round(Math.random()*(topClothes.length - 1));
        this.setState({
            pictureURL: topClothes[randomClothes],
        });
        return(this.state.pictureURL); 
    }
}

export async function getBottomClothes(){
    const randomClothes = await getRandomClothes();
    const bottomClothes = randomClothes[1];

    if (bottomClothes.length >0){
        let randomClothes = Math.round(Math.random()*(bottomClothes.length - 1));
        this.setState({
            pictureURL: bottomClothes[randomClothes],
        });
        return(this.state.pictureURL); 
    }
}

async function getRandomClothes(){
    const response = await fetch('http://localhost:4000');
    const data = await response.json();
    const clothesOnWeather = await getClothesOnWeather(data);
    const rightClothes = getTheRightClothes(clothesOnWeather);

    return rightClothes;
}

async function getTheWeather(url){
    const response = await fetch(url);
    const parsedResponse = await response.json(); 
    const temperature = parsedResponse.main.temp;
    const sky = parsedResponse.weather[0].main;

    return([temperature, sky]);
}

async function getClothesOnWeather(data){
    const url = "http://api.openweathermap.org/data/2.5/weather?q=saint%20petersburg&appid=d83aa69884ffe7bbc9eb3a22173bf01a";

    //yeah, much better to create another component to use all the api's, but that would take 
    //a lot of time from me)))0))

    const weather = await getTheWeather(url);
    const temperature = Math.round(weather[0] - 273);
    const sky = weather[1];

    //I guess the best way to do this is to go throug data.data one time
    //and append different clothes types if element fits

    const clothesWithHood = data.data.filter(data => {
        return(data.hood > 0);
    }).map(data => {
        return(data);
    });

    const warmClothes = data.data.filter(data => {
        return(data.name === 'tShirt' || data.name === 'skirt');
    }).map(data => {
        return(data);
    });

    const mediumWarmClothes = data.data.filter(data => {
        return(data.name === 'shirt' || data.name === 'breeches');
    }).map(data => {
        return(data);
    });

    const mediumColdClothes = data.data.filter(data => {
        return(data.name === 'jacket' || data.name === 'breeches');
    }).map(data => {
        return(data);
    });

    const coldClothes = data.data.filter(data => {
        return(data.name === 'sweater' || data.name === 'jeans');
    }).map(data =>{
        return(data);
    });

    //here shell be a cool algorythm which knows what to dress

    if (sky !== 'Rain'){
        switch (true){
            case temperature >= 20:
                return warmClothes;
            case temperature >= 15:
                return mediumWarmClothes;
            case temperature >=10:
                return mediumColdClothes;
            default:
                return (coldClothes);
        };
    }
    return clothesWithHood;
}

function getTheRightClothes(clothes){
    let topClothes =[];
    let bottomClothes =[];
    for (let i =0; i<clothes.length; i++){
        if (clothes[i].name === 'tShirt' || clothes[i].name === 'shirt' || 
        clothes[i].name === 'jacket' || clothes[i].name === 'sweater'){
            topClothes.push(clothes[i].url);
        } else{
            bottomClothes.push(clothes[i].url);
        }
    }

    return([topClothes, bottomClothes]);
}