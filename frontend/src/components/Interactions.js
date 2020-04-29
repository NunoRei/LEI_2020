import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WarningIcon from '@material-ui/icons/Warning';
import { ListItemIcon } from '@material-ui/core';

class Interactions extends Component {
    constructor() 
    {
        super()
        
            this.state = {
                interactions: [],
                interactions2: []
        }

    }


    render() 
    {

        return(
            <div>
                <Paper elevation={3}>
                    <h3 class="w3-center">Interactions</h3>
                    <List>
                        {this.props.value.map(inter => 
                            {
                                return (
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                         primary={inter.interactionPair[0].description}
                                    />
                                    {
                                        inter.interactionPair[0].severity === "high" &&
                                        <ListItemIcon>
                                            <WarningIcon/>
                                        </ListItemIcon>

                                    }
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

export default Interactions;