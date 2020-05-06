import React, {Component} from 'react';
import Meds from './Meds';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Profilepic from '../profile.png';
import Receita from '../components/Receita';
import Interactions from '../components/Interactions';

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
          meds: [],
          interactions: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.updatePrescription = this.updatePrescription.bind(this)
        this.updateInteractions =this.updateInteractions.bind(this)
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
        }).then(y => this.updateInteractions())
    }

    handleOnSubmit()
    {

      let url = new URL('http://localhost:3100/utente')
      url.search = new URLSearchParams({
        nUtente: this.state.inputNumber
      })

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
          }).then(y => this.updateInteractions())
    }

    removeMed(med,e) 
    {
      axios.request({
        method: 'DELETE',
        url: `http://localhost:3100/rmMed`,
        data: {
          med:med.MED,
          nUtente: this.state.Number
        }
      }).then(x => {
          this.updatePrescription()
      }).then(y => this.updateInteractions())
    }

    updateInteractions() {

      if (this.state.meds.length > 1) 
      {
          var str = "";
          var i;

          const rxcuis = this.state.meds.map(med => med.RXCUI)

          for(i=0;i<rxcuis.length;i++)
          {    
              if(i===rxcuis.length-1)
                  str+=rxcuis[i].toString()
              else
                  str+=rxcuis[i].toString()+"+"
          }

          console.log(str)

          axios.get('https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+str)
              .then(dados => {

                  var oncHIGH = []

                try {
                    oncHIGH = dados.data.fullInteractionTypeGroup[1].fullInteractionType
                }
                catch (error) {
                  console.log(error)
                }

                try {

                  const drugbank = dados.data.fullInteractionTypeGroup[0].fullInteractionType
          
                  this.setState({
                      interactions: drugbank.concat(oncHIGH)
                  })

                } catch (error) {
                  console.log(error)
                }

          })
      }
      else {
        this.setState({
          interactions: []
        })
      }
  }

    render() 
    {
        return(
          <div class="w3-padding-large">
          
                    <input class="w3-input w3-border w3-hover-gray w3-round-large " style={{width: '30%'}}
                      type="text"
                      value={this.state.inputNumber}
                      name="inputNumber"
                      placeholder="Patient number"
                      onChange={this.handleChange}
                    />
                    <button class="w3-btn  w3-round"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
                    
            
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
              <div class="w3-third">
                <Receita value={this.state.meds} onMedRemove={this.removeMed}/>
              </div>
              <div class="w3-third w3-center">
                <Meds onMedSubmit={this.addMed} />
              </div>
              <div class="w3-third">
                <Interactions value={this.state.interactions} />
              </div>
            </div>
          </div>
        );
    }   
}

export default Utente;