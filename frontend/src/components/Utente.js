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
          CC_id: '',
          SNS: '',
          Address: '',
          PostalCode: '',
          Localidade: '',
          PhoneNumber: '',
          Email: '',
          OBS: '',
          data_atualizacao: '',
          data_insercao: '',
          estado: '',
          local_number: '',
          meds: [],
          interactions: [],
          notLoaded: true
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

    /* if nao resolve o erro de p number nao existir na BD */
    handleOnSubmit()
    {
      if (this.state.inputNumber !== '')
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
                      Birth: data.DATA_NASCIMENTO,
                      CC_id: data.CC_ID,
                      SNS: data.SNS,
                      Address: data.MORADA,
                      PostalCode: data.CODIGO_POSTAL,
                      Localidade: data.LOCALIDADE,
                      PhoneNumber: data.TELEMOVEL,
                      Email: data.EMAIL,
                      OBS: data.OBS,
                      local_number: data.LOCAL_SEQ_NUMBER,
                      data_atualizacao: data.DATA_ATUALIZACAO,
                      data_insercao: data.DATA_INSERCAO,
                      notLoaded: false
                  })
                  
              }).then(z => {
                this.updatePrescription()
              })
      }  
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
        if (this.state.notLoaded) {
          return(
            <div class="w3-padding-large">
            <div class="w3-container w3-row w3-content">
                      
                      <input class="w3-large w3-center w3-round w3-sand" style={{width: '93%'}}
                        type="text"
                        value={this.state.inputNumber}
                        name="inputNumber"
                        placeholder="Patient Number"
                        onChange={this.handleChange}
                      />
                      <button class="w3-btn  w3-round-xxlarge w3-no-hover"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
            </div>
            </div>
          ); 
        }
        else {
          return(
            <div class="w3-padding-large">
            <div class="w3-container w3-row w3-content">
                      
                      <input class="w3-large w3-center w3-round w3-sand" style={{width: '93%'}}
                        type="text"
                        value={this.state.inputNumber}
                        name="inputNumber"
                        placeholder="Patient Number"
                        onChange={this.handleChange}
                      />
                      <button class="w3-btn  w3-round-xxlarge"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
            </div>
              <div class="w3-container w3-card w3-sand w3-content">
                <p><b>Patient Information</b></p>
                <div class="w3-col s1 w3-padding-16">
                  <img 
                    src={Profilepic}
                    alt=""
                    width="100" 
                    height="110"
                    class="w3-circle"
                  />
                </div>
                  
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>Local Number: </b>{this.state.local_number}</p>
                      <p><b>Patient Number: </b>{this.state.Number}</p>
                      <p><b>Name: </b>{this.state.Name}</p>
                      <p><b>Sex: </b>{this.state.Sex}</p>
                      <p><b>Birth: </b>{this.state.Birth}</p>
                      <p><b>Citizen Id: </b>{this.state.CC_id}</p>
                  </div>
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>SNS: </b>{this.state.SNS}</p>
                      <p><b>Address: </b>{this.state.Address}</p>
                      <p><b>Postal Code: </b>{this.state.PostalCode}</p>
                      <p><b>Locality: </b>{this.state.Localidade}</p>
                      <p><b>Phone Number: </b>{this.state.PhoneNumber}</p>
                      <p><b>Email: </b>{this.state.Email}</p>
                  </div>
                      
                  <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                      <p><b>Last Updated on: </b>{this.state.data_atualizacao}</p>
                      <p><b>Integrated on: </b>{this.state.data_insercao}</p>
                      
                </div>
                <div class="w3-col s3 " style = {{paddingLeft: '50px'}} >
                    <p><b>Observations: </b></p>
                    <div class="w3-panel w3-white">
                    {this.state.OBS}
                    </div>
                </div>
              
              </div>
              
              <div class="w3-container w3-content">
                
                <div class="w3-third w3-left">
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
}

export default Utente;
