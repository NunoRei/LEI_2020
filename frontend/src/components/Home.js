import React from 'react';


function Home() 
{
    return (
 
        
        <div class="row" style = {{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px', textAlign: 'justify'}}>

            <div  class="w3-panel " style= {{background: 'rgba(173,216,230, 0.5)' }}>
                <div class="w3-container">
                    <h3>A aplicação</h3>
                    <div class="w3-justyfi ">
                        <p>Existem interações medicamentosas que podem aumentar, ou reduzir, o efeito de um medicamento e causar sérios problemas aos pacientes. </p> 
                        <p>Esta aplicação serve para apoiar a prescrição de medicamentos, a pacientes, para que não haja interações graves. </p>
                    </div>
                </div>
            </div>
            <h3>Insturções</h3>
            
            <h4 class = 'NovUtente' id = 'NovUtente'>Novo Utente </h4>
            <div class="w3-card-4 ">
                <div class="w3-container">
                    <div class="w3-justyfi ">
                    <img src={require('../img/novoUtente.png')} alt= "alps" style={{width: "40%"}} class = "w3-center w3-right"/>
                    <p>A partir do menu lateral, aceder ao separdor "Adicionar utente".</p>
                    <p>Preencher os campos, com os dados do paciente:</p>
                    <ul class = 'ul'>
                        <li>Número sequencial (Não sei se não deverá ser gerado automaticamente na inserção)</li>
                        <li>Nome completo (obrigatório)</li>
                        <li>Número do cartão de cidadão (obrigatório)</li>
                        <li>Número de saúde SNS (obrigatório)</li>
                        <li>Data de Nascimento (obrigatório)</li>
                        <li>Género (obrigatório)</li>
                        <li>Morada </li>
                        <li>Localidade </li>
                        <li>Némero de telemóvel </li>
                        <li>Número de telefone </li>
                        <li>E-mail </li>
                    </ul>
                    <p>Por fim, clicar no botão adicionar utente.</p>
                    </div>
                </div>
            </div>

           
            <h4 class = 'Utente' id = 'Utente'>Utente </h4>
            <div class="w3-card-4 " style= {{background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <div class="w3-justyfi ">
                    <img src={require('../img/utente.png')} alt= "alps" style={{paddingLeft: '30px', width: "50%"}} class = "w3-center w3-right"/>
                    <p>A partir do menu lateral, aceder ao separdor "Utente" para prescrever medicamnetos ao paciente e ver a interação dos medicamentos.</p>
                    <p>Procurar o utente através do número.</p>
                    <p>Procurar o medicamento que quer prescrever através da caixa "medicamento". Adicionar à prescrição, do lado direito irá aparecer as interações entre os medicamentos.</p>
                    <p>Clique no botão validar, caso haja interações graves será alertado deverá retirar os medicamentos (na caixa do lado esquerdo) para que não haja interações graves. Após este processo, voltar a validar a prescrição.</p>
                    <p>Caso queira editar a informação do paciente clicar no botão editar. </p>
                    </div>
                </div>
            </div>
        </div>
       
    ) 
}

export default Home;