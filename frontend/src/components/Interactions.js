import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Interactions extends Component {
    constructor() 
    {
        super()
        
            this.state = {
                interactions: []
        }

    }

    getInteractions(meds) {

        if (Array.isArray(meds) && meds.length) 
        {
            var str = "";
            var i;

            const rxcuis = meds.map(med => med.RXCUI)

            for(i=0;i<rxcuis.length;i++)
            {    
                if(i===rxcuis.length-1)
                    str+=rxcuis[i].toString()
                else
                    str+=rxcuis[i].toString()+"+"
            }

            console.log(str)

            axios.get('https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+str)
                .then(dados => {
                    console.log(dados.data)
                    this.setState({
                        interactions: dados.data.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair
                    })
            })
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
                                <ListItem>
                                    <ListItemText
                                         primary={inter.interactionPair[0].description}
                                    />
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