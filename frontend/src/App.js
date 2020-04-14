import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Meds from './components/Meds';

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
        <Meds />
        <Footer />
      </div>
    );
  }

}

export default App;
