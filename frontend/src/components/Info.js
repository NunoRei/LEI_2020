import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './card';


let textRafaela = ["I am 22 year old.", "I have a degree in Computer Science and, I am now in the Master in Computer Engineering at the University of Minho.", "I am interested in Business Intelligence and Data Analysis."]
let ligacoesRafaela = ["https://github.com/Rafaela897","https://linkedin.com/in/rafaela-pinto-de-pinho-5649a5195"]

let textNuno = ["I am a 22 year old Computer Engineering student at University of Minho.", "Currently finishing my Master's Degree."]
let ligacoesNuno = ["https://github.com/NunoRei","https://linkedin.com/in/nuno-rei-15b80419a"]

let textFabio = ["Born in the city of the cock, currently, with 22 years old, master student in Computer Engineering at University of Minho and sports lover.", "I am very interested in Business Intelligence, Data Warehouse and Web development and I am always looking to learn new things."]
let ligacoesFabio = ["https://github.com/FabioSenra","https://linkedin.com/in/fábio-senra-204b0a1b0"]

class Info extends Component {  

    state = {
        Names:["Rafaela de Pinho", "Fábio Senra","Nuno Rei"],
        TextRafaela: textRafaela,
        LigacoesRafaela: ligacoesRafaela,
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
                        <img alt="" src={require('../img/fabio.jpg')} style={{marginLeft:'40px',marginBottom: '40px',  width: "4cm", height: "4cm"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[1]} text={this.state.TextFabio} ligacoes={this.state.LigacoesFabio}/>
                    </Col>
                    <Col className="w3-center">
                        <img alt="" src={require('../img/nuno.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "4cm", height: "4cm"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[2]} text={this.state.TextNuno} ligacoes={this.state.LigacoesNuno}/>
                    </Col>
                    <Col className="w3-center">
                        <img alt="" src={require('../img/rafaela.jpg')} style={{marginLeft:'40px',marginBottom: '40px', width: "4cm", height: "4cm"}} className = "w3-center w3-circle" />
                        <MediaCard name={this.state.Names[0]} text={this.state.TextRafaela} ligacoes={this.state.LigacoesRafaela}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Info;