import React, { Component } from 'react';
import MediaCard from './card';


let textRafaela = ["Tenho 22 anos.", "Sou licenciada em Ciências da Computação.", 
"Estou no 1º ano de mestrado em Engenharia Informática." ]

let textNuno = ["I am a 22 year old Computer Engineering student at University of Minho.", "Currently finishing my Master's Degree."]
let ligacoesNuno = ["https://github.com/NunoRei","linkedin.com/in/nuno-rei-15b80419a","nunorei98@gmail.com"]

class Info extends Component {  

    state = {
        Names:["Rafaela de Pinho", "Fábio Senra","Nuno Rei"],
        TextRafaela: textRafaela,
        LigacoesRafaela: [],
        TextFabio: [],
        LigacoesFabio: [],
        TextNuno: textNuno,
        LigacoesNuno: ligacoesNuno
    };
    

    render () {
        return(
            <div class="w3-row w3-center">
                <div class="column">
                    <img alt="" />
                    <MediaCard name={this.state.Names[1]} text={this.state.TextFabio} ligacoes={this.state.LigacoesFabio}/>
                </div>
                <div class="column">
                    <img alt="" src={require('../img/nuno.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} className = "w3-center w3-circle" />
                    <MediaCard name={this.state.Names[2]} text={this.state.TextNuno} ligacoes={this.state.LigacoesNuno}/>
                </div>
                <div class="column">
                    <img alt="" src={require('../img/rafaela.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} className = "w3-center w3-circle" />
                    <MediaCard name={this.state.Names[0]} text={this.state.TextRafaela} ligacoes={this.state.LigacoesRafaela}/>
                </div>
            </div>
        );
    }
}

export default Info;