import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import Pic from '../img/search.jpeg'

export default class UtenteSearch extends Component {
  
  constructor(props) 
  {
    super(props)
        this.state = {

        }
  }
 
  render() {
    return(
        <div class="w3-padding-large">
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="xs" className="w3-center"> 
                  <img
                        src={Pic}
                        alt=""
                        width="170" 
                        height="180"
                  />
                  <input 
                    class="w3-input w3-center" 
                    style={{width: '100%'}}
                    type="text"
                    value={this.props.inputNumber}
                    name="inputNumber"
                    placeholder="Patient Number"
                    onChange={this.props.handleChange}
                  />
                  <button class="w3-btn  w3-round-xxlarge w3-no-hover w3-no-border"  onClick={() => this.props.handleOnSubmit()}><SearchIcon/></button> 
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       </div>
      );
  }

}

/*<div class="w3-padding-large">
            <div class="w3-container w3-row w3-content">
                      
                      <input 
                        class="w3-large w3-center" 
                        style={{width: '93%'}}
                        type="text"
                        value={this.state.inputNumber}
                        name="inputNumber"
                        placeholder="Patient Number"
                        onChange={this.handleChange}
                      />
                      <button class="w3-btn  w3-round-xxlarge w3-no-hover w3-no-border"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
            </div>
*/