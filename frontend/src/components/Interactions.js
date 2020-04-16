import React, {Component} from 'react';


class Interactions extends Component {
    constructor() 
    {
        super()
        
        this.state = {
          Number: null,
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
          <div align="center">
            <form onSubmit={this.handleOnSubmit}>
              <input
                type="text"
                value={this.state.Number}
                name="Number"
                placeholder="Patient number"
                onChange={this.handleChange}
              />
              <button>Search</button>
            </form>
            <br />
            <h1>
              {this.state.Number}
              {this.state.Name}
              {this.state.Sex}
              {this.state.Birth}
            </h1>
          </div>
        );
    }   
}

export default Interactions;