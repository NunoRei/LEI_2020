import React, {Component} from 'react';
import Meds from './Meds';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Profilepic from '../profile.png';
import Receita from '../components/Receita';

class Utente extends Component {
    constructor(props) 
    {
        super(props)
        
        this.state = {
          inputNumber: '',
          Number: '',
          Name: '',
          Sex: '',
          Birth: '',
          meds: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.updatePrescription = this.updatePrescription.bind(this)
        this.addMed = this.addMed.bind(this)
        this.removeMed = this.removeMed.bind(this)
    }

    handleChange(event) 
    {
      const {name, value} = event.target

      this.setState({
        [name]: value
      })
    }

    updatePrescription() 
    {
      let url = new URL('http://localhost:3100/recUtente')
      url.search = new URLSearchParams({
        nUtente: this.state.Number
      })
           
      fetch(url)
        .then(response  => response.json())
        .then(data => {
            console.log(data)
            this.setState({
              meds: data
            })
        })
    }

    handleOnSubmit()
    {

      let url = new URL('http://localhost:3100/utente')
      url.search = new URLSearchParams({
        nUtente: this.state.inputNumber
      })

      console.log(url)

      fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Number: data.N_UTENTE,
                    Name: data.NOME,
                    Sex: data.SEXO,
                    Birth: data.DATA_NASCIMENTO
                })
                
            }).then(z => {
              this.updatePrescription()
            })     
    }

    addMed(selection)
    {
        axios.post('http://localhost:3100/addMed',{
            nUtente: this.state.Number,
            med: selection
        }).then(data => {
            console.log(data)
        }).then(x => 
          {
            this.updatePrescription()
          })
    }

    removeMed(med) 
    {
      
      axios.delete('http://localhost:3100/rmMed', {
        nUtente: this.state.Number,
        med: med.MED
      }).then(x => {
        this.updatePrescription()
      })
      /*
      fetch("http://localhost:3100/rmMed", {
         method: "DELETE", 
         headers: { 
           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }, 
         body: JSON.stringify({
           nUtente: this.state.Number,
           med: med.MED
          }) 
        }).then(x => {
          this.updatePrescription()
        })*/
    }

    render() 
    {
        return(
          <div class="w3-padding-large">
              <div display="inline">
                    <input class="w3-input w3-round-large"
                      type="text"
                      value={this.state.inputNumber}
                      name="inputNumber"
                      placeholder="Patient number"
                      onChange={this.handleChange}
                    />
              <button class="w3-btn" onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
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
                <p><b>Number: </b>{this.state.Number}</p>
                <p><b>Name: </b>{this.state.Name}</p>
                <p><b>Sex: </b>{this.state.Sex}</p>
                <p><b>Birth: </b>{this.state.Birth}</p>
              </div>
            </div>
            <div class="w3-container w3-row-padding">
              <div class="w3-third w3-panel w3-white w3-border w3-round-large">
                <Receita value={this.state.meds} onMedRemove={this.removeMed}/>
              </div>
              <div class="w3-third w3-center">
                <Meds onMedSubmit={this.addMed} />
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