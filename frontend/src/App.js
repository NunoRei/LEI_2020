import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Receita from './components/Receita';
import Utente from './components/Utente'
import Home from './components/Home'
import Info from './components/Info'
import AddUtente from './components/AddUtente'

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
          <Route path="/addUtente" component={AddUtente} />
          <Route path="/sobre" component={Info} />
          <Route path="/receita" component={Receita} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }

}

export default App;
