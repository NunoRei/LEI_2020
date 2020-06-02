import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';

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
            <div>
                <ListItem>
                    <Autocomplete
                        id="combo-box-demo"
                        options={this.state.meds}          
                        getOptionLabel={(option) => option.DESC_C}
                        style={{ width: 1000 }}
                        renderInput={(params) => <TextField {...params} label="Add a Drug to the Prescription" position="center"/>}
                        onChange={this.updateSelection}
                        name="selection"
                    />
                    <IconButton onClick={() => this.props.onMedSubmit(this.state.selection)}>
                        <AddIcon />
                    </IconButton>
                </ListItem>
            </div>
        );
    }
}

/*
<div class="w3-padding-large">
<button 
class="w3-button w3-pale-green w3-border w3-border-teal w3-hover-teal w3-round-large" 
onClick={() => this.props.onMedSubmit(this.state.selection)}
>
  <b>Add to Prescription</b>
</button>
</div>
*/
export default Meds;