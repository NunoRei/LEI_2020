import React, {Component} from 'react';
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
     </div>
        );
    }   
}

export default Receita;