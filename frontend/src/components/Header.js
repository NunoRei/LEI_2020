import React from 'react';
import Sidebar from './Sidebar'

function Header() 
{
    return (
        <div class="w3-row" >
            <div class="w3-col s1 w3-center w3-padding-64">
                <Sidebar/>
            </div>
            <div class="w3-col s9 w3-center w3-padding-64">
                <h1>Drug Interaction</h1>
            </div>
      </div>
    ) 
}

export default Header;