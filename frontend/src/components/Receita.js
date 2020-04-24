import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';

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
            <Paper elevation={3}>
            <h3 class="w3-center">Prescription</h3>
            <List>
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
      </List>
      </Paper>
     </div>
        );
    }   
}

export default Receita;