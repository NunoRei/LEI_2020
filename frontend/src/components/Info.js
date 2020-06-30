import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './card';


let textRafaela = ["Tenho 22 anos.", "Sou licenciada em Ciências da Computação.", 
"Estou no 1º ano de mestrado em Engenharia Informática." ]

let textNuno = ["I am a 22 year old Computer Engineering student at University of Minho.", "Currently finishing my Master's Degree."]
let ligacoesNuno = ["https://github.com/NunoRei","linkedin.com/in/nuno-rei-15b80419a","nunorei98@gmail.com"]

let textFabio = ["Born in the city of the cock, currently, with 22 years old, master student in computer engineering at University of Minho and sports lover.", "I am very interested in Business Intelligence, Data Warehouse and Web development and I am always looking to learn new things."]
let ligacoesFabio = ["https://github.com/FabioSenra","linkedin.com/in/fábio-senra-204b0a1b0","fabio-senra@hotmail.com"]

class Info extends Component {  

    state = {
        Names:["Rafaela de Pinho", "Fábio Senra","Nuno Rei"],
        TextRafaela: textRafaela,
        LigacoesRafaela: [],
        TextFabio: textFabio,
        LigacoesFabio: ligacoesFabio,
        TextNuno: textNuno,
        LigacoesNuno: ligacoesNuno
    };
    

    render () {
        return(
            <Container>
                <Row>
                    <Col className="w3-center">
                        <img alt="" src={require('../img/fabio.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[1]} text={this.state.TextFabio} ligacoes={this.state.LigacoesFabio}/>
                    </Col>
                    <Col className="w3-center">
                        <img alt="" src={require('../img/nuno.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[2]} text={this.state.TextNuno} ligacoes={this.state.LigacoesNuno}/>
                    </Col>
                    <Col className="w3-center">
                        <img alt="" src={require('../img/rafaela.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "200px"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[0]} text={this.state.TextRafaela} ligacoes={this.state.LigacoesRafaela}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Info;