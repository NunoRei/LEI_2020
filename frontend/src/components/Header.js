import React from 'react';
import Exemplo from './ex'

function Header() 
{
    return (
            <div style={{backgroundColor:"rgba(173,216,230, 0.2)"}}>
                <Exemplo/>
                <h1 className="w3-center">Drug Interactions</h1>
            </div>
    ) 
}

export default Header;