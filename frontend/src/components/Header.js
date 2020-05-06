import React from 'react';
import Sidebar from './Sidebar'


function Header() 
{
    return (
        <div class= "header" >
        
            <div class="w3-row" >
                <div class="w3-col s1 w3-center w3-padding-32">
                    <Sidebar/>
                </div>
                <div class="w3-col s9 w3-center w3-padding-16">
                    <h1>Drug Interaction</h1>
                </div>
            
                <img src= {require('./drug.png')} class="w3-round w3-display-topright w3-padding-16" style = {{width: '150px'}} ></img>
            
            </div>
        </div>
       
    ) 
}

export default Header;