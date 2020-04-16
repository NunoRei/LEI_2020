import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Meds from './components/Meds';
import Utente from './components/Utente'
import Home from './components/Home'
import Info from './components/Info'

class App extends Component {
  
  constructor() 
  {
    super()
    this.state = {}
  }
 
  render() {
      return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/utente" component={Utente} />
          <Route path="/sobre" component={Info} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }

}

export default App;
