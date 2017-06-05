import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/lib/bootstrap/css/bootstrap.min.css';
import './style/lib/font-awesome/css/font-awesome.min.css';
import GoogleLogin from 'react-google-login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(_evt) {
        /*this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));*/
        console.log("alert event " + _evt)
    }


    render() {
        return ( < div className = "App" >
            < div className = "App-header" >
            < img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            < h2 > Welcome to Tool v .0 .0 .1 < /h2> < /div > < div className = "App-intro"
            id = "login" >
            < GoogleLogin clientId = "######-sdfasd23423fgfsf.apps.googleusercontent.com"
            buttonText = "Login" hd="domain name.com"
            onSuccess = { responseGoogle }
            onFailure = { responseGoogle }
            hostedDomain= "io-media.com"
            />  < /div > < /div>

        );
    }


}

const responseGoogle = (response) => {
  if(response.getHostedDomain() != "io-media.com"){
    response.disconnect()
  }
  console.log(response);
}

export default App;
