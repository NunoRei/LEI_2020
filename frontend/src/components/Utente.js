import React, {Component} from 'react';
import Meds from './Meds';
import SearchIcon from '@material-ui/icons/Search';
import Profilepic from '../profile.png';


class Utente extends Component {
    constructor() 
    {
        super()
        
        this.state = {
          Number: '',
          Name: '',
          Sex: '',
          Birth: '',
        }

        this.handleChange = this.handleChange.bind(this)
        //this.handleOnSubmit = this.handleChange.bind(this)
    }

    handleChange(event) 
    {
      const {name, value} = event.target

      this.setState({
        [name]: value
      })
    }

    handleOnSubmit = () =>
    {
      let url = new URL('http://localhost:3100/utente')
      url.search = new URLSearchParams({
        nUtente: this.state.Number
      })
      fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    Number: data.N_UTENTE,
                    Name: data.NOME,
                    Sex: data.SEXO,
                    Birth: data.DATA_NASCIMENTO
                })
            })
    }

    render() 
    {
        return(
          <div class="w3-padding-large">
              <div display="inline">
                    <input class="w3-input w3-round-large"
                      type="text"
                      value={this.state.Number}
                      name="Number"
                      placeholder="Patient number"
                      onChange={this.handleChange}
                    />
              <button class="w3-btn" onClick={this.handleOnSubmit}><SearchIcon/></button> 
            </div>
            <div class="w3-container w3-panel w3-white w3-row-padding w3-border w3-round-large">
              <div class="w3-col s1 w3-padding-16">
                <img 
                  src={Profilepic}
                  alt=""
                  width="100" 
                  height="110"
                />
              </div>
                <div class="w3-col s1">
                <p>Name: {this.state.Name}</p>
                <p>Sex: {this.state.Sex}</p>
                <p>Birth: {this.state.Birth}</p>
              </div>
            </div>
            <div class="w3-container w3-row-padding">
              <div class="w3-third w3-panel w3-white w3-border w3-round-large">
                <h3>RECEITA</h3>
              </div>
              <div class="w3-third">
                <Meds />
              </div>
              <div class="w3-third w3-panel w3-white w3-border w3-round-large">
                <h3>INTERACOES</h3>
              </div>
            </div>
          </div>
        );
    }   
}

export default Utente;