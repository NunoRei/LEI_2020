import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Meds extends Component {
    constructor() {
        super()
        this.state = {
            meds: {},
            selection: ""
        }
        
        this.updateSelection = this.updateSelection.bind(this)

    }

    componentDidMount() {
        fetch("http://localhost:3100/meds")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    meds: data
                })
            })
    }

    updateSelection(event) 
    {
        var cod;

        this.state.meds.forEach(med => {
           if (med.DESC_C === event.target.textContent)
                cod = med.CODIGO;
        });
        console.log(cod)
        this.setState({
            selection: cod
        })
    }
      
    render() {

        return (
            <div class="w3-center w3-padding-large">
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.meds}          
                    getOptionLabel={(option) => option.DESC_C}
                    renderInput={(params) => <TextField {...params} label="Medicamento" variant="filled" color="primary" />}
                    onChange={this.updateSelection}
                    name="selection"
                /> 
                <div class="w3-padding-large">
                <button 
                class="w3-button w3-pale-green w3-border w3-border-teal w3-hover-teal w3-round-large" 
                onClick={() => this.props.onMedSubmit(this.state.selection)}
                >
                  <b>Add to Prescription</b>
                </button>
                </div>
            </div>
        );
    }
}

export default Meds;