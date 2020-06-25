import React, {Component} from 'react';
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
                <h3 className="w3-center"> Drug Interaction's within the Prescription </h3>
                <ul className="w3-ul w3-card-4">
                    <li className="w3-display-container">
                    {this.props.value.sort(function(a,b) {
                            if(a.interactionPair[0].severity === "high" && b.interactionPair[0].severity === "high") 
                                return 0;
                            else if(a.interactionPair[0].severity === "high")
                                return -1;
                            else if(b.interactionPair[0].severity === "high")
                                return 1;
                            else 
                                return 0;
                        }).map(inter => 
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
                    </li>
                </ul>
            </div>
        );
    } 
}

export default Interactions;