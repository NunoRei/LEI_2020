import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Meds from './components/Meds';
import Interactions from './components/Interactions'

class App extends Component {
  
  constructor() 
  {
    super()
    this.state = {}
  }
 
  render() {
      return (
      <div>
        <Header />
        <Interactions />
        <Footer />
      </div>
    );
  }

}

export default App;
