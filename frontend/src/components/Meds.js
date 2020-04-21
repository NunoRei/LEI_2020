import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Meds extends Component {
    constructor() {
        super()
        this.state = {
            meds: {}
        }
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
    
    render() {
        return (
            <div class="w3-center">
                <p> Adicionar Medicamento:  </p>
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.meds}          
                    getOptionLabel={(option) => option.DESC_C}
                    
                    renderInput={(params) => <TextField {...params} label="Medicamento" variant="outlined" />}
                /> 
            </div>
        );
    }
}

export default Meds;