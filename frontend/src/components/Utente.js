import React, {Component} from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Receita from '../components/Receita';
import UtenteInfo from '../components/UtenteInfo'
import Interactions from '../components/Interactions';
import Alert from '@material-ui/lab/Alert';

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
          notLoaded: true,
          caughtError: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.updatePrescription = this.updatePrescription.bind(this)
        this.updateInteractions =this.updateInteractions.bind(this)
        this.addMed = this.addMed.bind(this)
        this.removeMed = this.removeMed.bind(this)
        this.profileUpdate = this.profileUpdate.bind(this)
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
                      notLoaded: false,
                      caughtError: false
                  })
                  
              }).then(z => {
                this.updatePrescription()
              }).catch(error => {
                this.setState({
                    caughtError: true
                })
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

  profileUpdate(
    number,
    name,
    sex,
    birth,
    cc_id,
    sns,
    address,
    postalCode,
    locality,
    phone,
    email,
    obs
  )
  {
    console.log((birth.split("T"))[0])
    axios.request({
      method: 'PUT',
      url: `http://localhost:3100/updateUtente`,
      data: {
        nUtente: number,
        nome: name,
        sexo: sex,
        data: (birth.split("T"))[0],
        cc_id: cc_id,
        sns: sns,
        morada: address,
        codigo_postal: postalCode,
        localidade: locality,
        telemovel: phone,
        email: email,
        obs: obs
      }
    }).then(response => {
        console.log(response)
        this.handleOnSubmit()
    }).catch(error => {
      console.log(error)
    })
  }

  render() 
    {   
      if (this.state.caughtError) {
        return(
          <div class="w3-padding-large">
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
            <Alert severity="error">
                      No Patient found with that Number — <strong>Register it!</strong>
            </Alert>      
          </div>
        );
      }
      else if (this.state.notLoaded) {
          return(
            <div class="w3-padding-large">
            <div class="w3-container w3-row w3-content">
                      
                      <input class="w3-large w3-center" style={{width: '93%'}}
                        type="text"
                        value={this.state.inputNumber}
                        name="inputNumber"
                        placeholder="Patient Number"
                        onChange={this.handleChange}
                      />
                      <button class="w3-btn  w3-round-xxlarge w3-no-hover w3-no-border"  onClick={() => this.handleOnSubmit()}><SearchIcon/></button> 
            </div>
            </div>
          ); 
        }
        else {
          return(
            <div class="w3-container w3-content w3-padding-large">

              <div>
                <UtenteInfo 
                  local_number={this.state.local_number}
                  number={this.state.Number}
                  name={this.state.Name}
                  sex={this.state.Sex}
                  birth={this.state.Birth}
                  cc_id={this.state.CC_id}
                  SNS={this.state.SNS}
                  address={this.state.Address}
                  postalCode={this.state.PostalCode}
                  locality={this.state.Localidade}
                  phone={this.state.PhoneNumber}
                  email={this.state.Email}
                  updateDate={this.state.data_atualizacao}
                  insertDate={this.state.data_insercao}
                  obs={this.state.OBS}
                  onEditSave={this.profileUpdate}
                />
              </div>
               
              <div>
                <Receita value={this.state.meds} onMedRemove={this.removeMed} onMedSubmit={this.addMed}/>
              </div>

              <div>
                <Interactions value={this.state.interactions} />
              </div>

            </div>
            
          );
      }
    }  
}    

export default Utente;
