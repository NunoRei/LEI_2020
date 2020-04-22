import React, {Component} from 'react';
import Meds from './Meds';
import SearchIcon from '@material-ui/icons/Search';


class AddUtente extends Component {
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

    handleOnSubmit = () =>
    {
      
    }

    render() 
    {
        return (
            <div >
            <h3>This will be Add Utente Page</h3>
            </div>
        )
    }   
}

export default AddUtente;