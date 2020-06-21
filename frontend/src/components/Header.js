import React from 'react';
import Sidebar from './Sidebar'
import Exemplo from './ex'
import {Link} from 'react-router-dom';
//import Nav from 'react-bootstrap/Nav'



function Header() 
{
    return (
            <div style={{backgroundColor:"rgba(173,216,230, 0.2)"}}>
                <Exemplo/>
                <h1 className="w3-center">Interações Medicamentosas</h1>
            </div>

            
            
       
    ) 
}

export default Header;