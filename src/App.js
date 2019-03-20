import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './scenes/Home';
import Products from './scenes/Products';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router >
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
