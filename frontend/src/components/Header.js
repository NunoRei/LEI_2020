import React from 'react';
import Sidebar from './Sidebar'

function Header() 
{
    return (
        <div class="w3-row" >
            <div class="w3-col s1 w3-center">
                <Sidebar/>
            </div>
            <div class="w3-col s9 w3-center">
                <h1>Drugs</h1>
            </div>
      </div>
    ) 
}

export default Header;