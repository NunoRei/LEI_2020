import React from 'react';


function Home() 
{
    return (
 
            <div class="row" style = {{paddingLeft: '30px', paddingRight: '30px',paddingBottom: '30px', paddingTop: '30px', textAlign: 'justify'}}>
            <div  class="w3-card-4 " style= {{ background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h3>The Application</h3>
                    <div class="w3-justyfi ">
                        <p>Some drugs interactions can increase, or reduce, the effect of a drug and cause serious problems for patients. </p> 
                        <p>This application helps to avoid dangerous drugs interactions when prescribing medications to patients.</p>
                    </div>
                </div>
            </div>
            <h3 style = {{marginTop: '30px'}}>Instructions</h3>
            
            <div class="w3-card-4 " style= {{marginTop: '30px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'NovUtente' id = 'NovUtente'>Add a New Patient</h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/novoUtente.png')} alt= "alps" style={{marginLeft:'30px',marginBottom: '40px', paddingLeft: '30px', height: "10cm", width: "18cm"}} class = "w3-right"/>
                    <p>From the side menu, access the "Register Patient" tab.</p>
                    <p>Fill out the form with the following patient information:</p>
                    <ul class = 'ul'>
                        <li> Full name* </li>
                        <li> Patient number* </li>
                        <li> Date of birth* </li>
                        <li> Gender* </li>
                        <li> Citizen card number* </li>
                        <li> SNS number* </li>
                        <li> Address* </li>
                        <li> Post code* </li>
                        <li> Location* </li>
                        <li> Mobile number* </li>
                        <li> Email* </li>
                        <li> Notes </li>
                    </ul>
                    <p>Finally, click on the "Register" button to add a user.</p>
                    <p style={{fontSize: '9px', color: 'red'}}> Fields with * are required </p>
                    </div>
                </div>
            </div>
            <div class="w3-card-4 " style= {{marginTop: '30px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'Utente' id = 'Utente'>Edit a Patient's Information</h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/utente.png')} alt= "alps" style={{marginBottom: '40px', marginLeft:'20px', paddingLeft: '30px', height: "7.5cm", width: "15cm"}} class = "w3-right"/>
                    <p>From the side menu, access the "Patient" tab.</p>
                    <p>Search for the patient using his patient number.</p>
                    <p>You can insert or change the user's photo, using the "UPLOAD PICTURE" button.</p>
                    <p>You can edit the user information using the "EDIT PROFILE" button.</p>
                    
                    </div>
                </div>
            </div>
            <div class="w3-card-4 " style= {{marginTop: '30px', background: 'rgba(173,216,230, 0.2)' }}>
                <div class="w3-container">
                    <h4 class = 'Utente' id = 'Utente'>Prescription of medications</h4>
                    <div class="w3-justyfi ">
                    <img src={require('../img/utente-pres.PNG')} alt= "alps" style={{marginBottom: '40px', marginLeft:'20px', paddingLeft: '30px', height: "7.5cm", width: "15cm"}} class = "w3-right"/>
                    <p>Repeat steps 1 and 2 of "Edit a Patient's Information".</p>
                    <p>Find the drug you want to prescribe using the "Add a Drug to the Prescription" box. Add to prescription using the '+' button.</p>
                    <p>In case of any interaction, this information will be presented in the text box below.</p>
                    </div>
                </div>
            </div>
        </div>
            
       
    ) 
}

export default Home;