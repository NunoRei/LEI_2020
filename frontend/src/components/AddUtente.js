import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class AddUtente extends Component {
    constructor() 
    {
        super()
        
        this.state = {
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
          redirect: false
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

    /*
    fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        }),
    });
    */

    handleOnSubmit = (e) =>
    {
        e.preventDefault()
        const data = {
            nome: this.state.Name,
            sexo: this.state.Sex,
            data: this.state.Birth,
            nUtente: this.state.Number,
            cc_id: this.state.CC_id,
            sns: this.state.SNS,
            morada: this.state.Address,
            codigo_postal: this.state.PostalCode,
            localidade: this.state.Localidade,
            telemovel: this.state.PhoneNumber,
            email: this.state.Email,
            obs: this.state.OBS
        }
        axios.post('http://localhost:3100/newUtente',data)
        .then(data=>{
            this.setState({redirect:true})
        })
        
    }

    render() 
    {
        const {redirect} = this.state
        if(redirect){
            return <Redirect to="/utente"/>
        }else {
            return (

                <div class="w3-row">
                    <div class="w3-col" style={{width:"10%"}}> <br/></div>
                    <div class=" w3-half w3-margin" style = {{backgroundColor: 'rgba(173,216,230, 0.2)',width:"80%"}}  >
                        
                        <form class="w3-padding w3-card"  onSubmit={this.handleOnSubmit} >
                            <h2 class="w3-center">Novo Utente</h2>
                            <br></br>
                            <label class="w3-text-black">Nome</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Name}
                                name="Name"
                                placeholder="Nome do Utente"
                                onChange={this.handleChange}
                            />
                            <label>Número</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Number}
                                name="Number"
                                placeholder="Número do Utente"
                                onChange={this.handleChange}
                            />
                            <label>Data de nascimento</label>
                            <input class="w3-input w3-round-large"
                                type="date"
                                value={this.state.Birth}
                                name="Birth"
                                placeholder=""
                                onChange={this.handleChange}
                            />
                            <label>Género</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Sex}
                                name="Sex"
                                placeholder="Género do utente"
                                onChange={this.handleChange}
                            />
                            <label>Cartão de Cidadao</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.CC_id}
                                name="CC_id"
                                placeholder="Cartao de Cidadao"
                                onChange={this.handleChange}
                            />
                            <label>Número do Servico Nacional de Saude</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.SNS}
                                name="SNS"
                                placeholder="Numero"
                                onChange={this.handleChange}
                            />
                            <label>Morada</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Address}
                                name="Address"
                                placeholder="Morada"
                                onChange={this.handleChange}
                            />
                            <label>Código Postal</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.PostalCode}
                                name="PostalCode"
                                placeholder="Codigo de Postal"
                                onChange={this.handleChange}
                            />
                            <label>Localidade</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Localidade}
                                name="Localidade"
                                placeholder="Localidade"
                                onChange={this.handleChange}
                            />
                            <label>Telemóvel</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.PhoneNumber}
                                name="PhoneNumber"
                                placeholder="Telemovel"
                                onChange={this.handleChange}
                            />
                            <label>Email</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.Email}
                                name="Email"
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <label>Observações</label>
                            <input class="w3-input w3-round-large"
                                type="text"
                                value={this.state.OBS}
                                name="OBS"
                                placeholder="Observacoes"
                                onChange={this.handleChange}
                            />
                            <div style={{paddingTop: '10px'}}>
                            <button onClick={this.handleOnSubmit} class="w3-button w3-white w3-border w3-border-blue w3-round-large w3-hover-blue ">Adicionar Utente</button>
                            </div>
                        </form>
                    </div>
                    <div class="w3-quarter" ><br/></div>
                </div>
            )
        }
        }

           
}

export default AddUtente;