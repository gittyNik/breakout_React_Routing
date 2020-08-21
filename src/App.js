import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Signin from "./components/Signin.js";
import Navigation from "./components/Navigation.js";

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    this.setState({
      username,
      password
    })
    // console.log(username, password)
  } 

  render () {
    let {username, password} = this.state;
    return (
      <div className="App">
  
          <BrowserRouter>
          <Navigation username={username}/>
            <Route exact path="/" render={(props) => {
              return <Home {...props} username={username} />
            }} />
            <Route path="/products" component={Products} />
            <Route path="/signin" render={(props) => {
              return <Signin {...props} handleSubmit={this.handleSubmit} username={username}/>
              }
            } />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
