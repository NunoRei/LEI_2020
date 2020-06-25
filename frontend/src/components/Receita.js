import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Meds from './Meds';

class Receita extends Component {
    constructor() 
    {
        super()
        
        this.state = {
            meds: []
        }
    }
    
    render()
    {
        return(
            <div>
                <h3 class="w3-center"> Patient's Prescription </h3>
                <ul class="w3-ul w3-card-4">
                    <li class="w3-display-container">
                        {this.props.value.map(med => 
                            {
                                return (
                                    <ListItem 
                                        key={med.MED} 
                                        role={undefined} 
                                        dense 
                                        button 
                                        onClick={() => {}}>
                                    <ListItemText primary={med.DESC_C} />
                                    <ListItemSecondaryAction>
                                    <IconButton onClick={() => this.props.onMedRemove(med)}>
                                    <CloseIcon />
                                    </IconButton>
                                    </ListItemSecondaryAction>
                                    </ListItem> 
                                );
                            }
                        )}
                        <Meds onMedSubmit={this.props.onMedSubmit}/>
                    </li>
                </ul>
            </div>
        );
    } 
}

export default Receita;