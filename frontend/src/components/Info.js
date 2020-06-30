import React, { Component } from 'react';
import MediaCard from './card';


let textRafaela = ["Tenho 22 anos.", "Sou licenciada em Ciências da Computação.", 
"Estou no 1º ano de mestrado em Engenharia Informática." ]

class Info extends Component {  

    state = {
        Names:["Rafaela de Pinho", "Fábio Senra","Nuno Rei"],
        TextRafaela: textRafaela,
        TextFabio: [],
        TextNuno: []
    };
    

    render () {
        return(
            <div class="row">
                <div class="column">
                    <img alt="" />
                    <MediaCard name={this.state.Names[1]} text={this.state.TextFabio}/>
                </div>
                <div class="column">
                    <img alt="" />
                    <MediaCard name={this.state.Names[2]} text={this.state.TextNuno}/>
                </div>
                <div class="column">
                    <img alt="" src={require('../img/rafaela.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} class = "w3-center w3-circle" />
                    <MediaCard name={this.state.Names[0]} text={this.state.TextRafaela}/>
                </div>
            </div>
        );
    }
}

export default Info;