import React, {Component} from 'react';


class Utente extends Component {
    constructor() 
    {
        super()
        
        this.state = {
          Number: '',
          Name: '',
          Sex: '',
          Birth: '',
          Meds: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleChange.bind(this)
    }

    handleChange(event) 
    {
      const {name, value} = event.target

      this.setState({
        [name]: value
      })
    }

    handleOnSubmit(event) 
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

      event.preventDefault();
    }

    render() 
    {
        return(
          <div>
            <div align="left">
              <p>NUMBER: {this.state.Number} </p>
              <p>NAME: {this.state.Name}</p>
              <p>SEX: {this.state.Sex}</p>
              <p>BIRTHDATE: {this.state.Birth}</p>
            </div>
            <div align="center">
              <form>
                <input
                  type="text"
                  value={this.state.Number}
                  name="Number"
                  placeholder="Patient number"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleOnSubmit}>Search</button>
              </form>
            </div>
          </div>
        );
    }   
}

export default Utente;