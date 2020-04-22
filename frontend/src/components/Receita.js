import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
                <Paper elevation={1}>
                    <List>
            {this.props.value.map(med => 
            {
                return (
                <ListItem 
                    key={med.CODIGO} 
                    role={undefined} 
                    dense 
                    button 
                    onClick={() => {}}>
                <ListItemText primary={med.DES_C} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => this.removeMed(med)}>
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