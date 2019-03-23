import React from "react";
import Info from "./components/Info"
import Weather from "./components/Weather";
import Form from "./components/Form";
import Item from "./components/Item";

export const API_KEY = "63296d7f48414439662644f7985fdd7d"

class App extends React.Component{

    state = {
        forecast: []
    }

    gettingWqather = async (cityName) => {

        const city = cityName;
        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metcric`);

        const data = await api_url.json();
        console.log(data);
    }

    setForecast = (forecast) => {

        this.setState({forecast: forecast});
    };

    render(){
        return(
            <div>
               <Info/>
               <Form weatherMethod={this.gettingWqather} setAppForecast={this.setForecast}/>
               <Weather/>
               {
                   this.state.forecast.map(element => {
                        console.log(element);
                    return (
                        <Item key={element.dt_txt} data={element.dt_txt} temperature={element.main.temp}/>
                    )
                   } )
               }
            </div>
        );
    }
}

export default App;