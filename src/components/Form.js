import React from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import {API_KEY} from '../App'

class Form extends React.Component {

    state = {
        cityName: undefined,
        forecast: []
    }

    handleCityName = (event) =>{

        this.setState({cityName: event.target.value});
    };

    getData = () =>{

        this.weatherService();
        this.props.weatherMethod(this.state.cityName);
    };

    weatherService = () =>{

        console.log(new Date().getTime());
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=${API_KEY}&units=metcric`).then(response => {
           
            console.log("axios " + new Date().getTime());
            let data = response.data;
            this.setState({forecast: data.list});
            this.props.setAppForecast(data.list);
            
        })
    }

    render(){

        console.log(this.state.forecast);
        return(
            <form>
                <Input name="inputCity" placeholder="City" onChange={this.handleCityName}/>
                <Button variant="contained" component="span" onClick={this.getData}>
                Download
                </Button>
            </form>
        );
    }
}

export default Form;