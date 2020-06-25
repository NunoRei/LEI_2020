import React from 'react';


function Home() 
{
    return (
 
            <div class="row" style = {{paddingLeft: '30px', paddingRight: '30px',paddingBottom: '30px', paddingTop: '30px', textAlign: 'justify'}}>
            <div  class="w3-card-4 " style= {{ background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h3>A aplicação</h3>
                    <div class="w3-justyfi ">
                        <p>Existem interações medicamentosas que podem aumentar, ou reduzir, o efeito de um medicamento e causar sérios problemas aos pacientes. </p> 
                        <p>Esta aplicação serve para apoiar a prescrição de medicamentos, a pacientes, para que não haja interações graves. </p>
                    </div>
                </div>
            </div>
            <h3 style = {{marginTop: '20px'}}>Instruções</h3>
            
            <div class="w3-card-4 " style= {{marginTop: '20px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'NovUtente' id = 'NovUtente'>Novo Utente </h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/novoUtente.png')} alt= "alps" style={{marginLeft:'40px',marginBottom: '40px', width: "50%"}} class = "w3-center w3-right"/>
                    <p>A partir do menu lateral, aceder ao separdor "Register Patient".</p>
                    <p>Preencher os campos, com os dados do paciente:</p>
                    <ul class = 'ul'>
                        <li>Nome completo</li>
                        <li>Número de paciente</li>
                        <li>Data de Nascimento </li>
                        <li>Género </li>
                        <li>Número do cartão de cidadão</li>
                        <li>Número de saúde SNS</li>
                        <li>Morada </li>
                        <li>Código Postal</li>
                        <li>Localidade </li>
                        <li>Número de telemóvel </li>
                        <li>E-mail </li>
                        <li>Observações</li>
                    </ul>
                    <p>Por fim, clicar no botão "Register" para adicionar utente.</p>
                    </div>
                </div>
            </div>
            <div class="w3-card-4 " style= {{marginTop: '20px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'Utente' id = 'Utente'>Editar um utente </h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/utente.png')} alt= "alps" style={{marginBottom: '40px', marginLeft:'20px', paddingLeft: '30px', height: "7.5cm", width: "15cm"}} class = "w3-center w3-right"/>
                    <p>A partir do menu lateral, aceder ao separdor "Patient".</p>
                    <p>Procurar o utente através do número.</p>
                    <p>Poderá inserir ou alterar a fotografia do utente, usando o botão  "UPLOAD PICTURE".</p>
                    <p>Poderá editar a informação fo utente usando o botão "EDIT PROFILE".</p>
                    
                    </div>
                </div>
            </div>
            <div class="w3-card-4 " style= {{marginTop: '20px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'Utente' id = 'Utente'>Prescrição de medicamentos </h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/utente-pres.PNG')} alt= "alps" style={{marginBottom: '40px', marginLeft:'20px', paddingLeft: '30px', height: "7.5cm", width: "15cm"}} class = "w3-center w3-right"/>
                    <p>A partir do menu lateral, aceder ao separdor "Patient" para prescrever medicamnetos ao paciente e ver a interação dos medicamentos.</p>
                    <p>Procurar o utente através do número.</p>
                    <p>Procurar o medicamento que quer prescrever através da caixa "Add a Drug to the Prescription". Adicionar à prescrição, usando o botão '+'.</p>
                    <p>Caso haja alguma interação, esta informação será apresentada na caixa de texto em baixo.</p>
                    </div>
                </div>
            </div>
        </div>
            
       
    ) 
}

export default Home;