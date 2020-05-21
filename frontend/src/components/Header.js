import React from 'react';
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';
//import Nav from 'react-bootstrap/Nav'



function Header() 
{
    return (
            <div class= "header" >
            
                <div class="w3-row" >
                    <div class= "w3-bar w3-right-align" style = {{ backgroundColor: 'rgba(173,216,230, 0)', position: '-webkit-sticky'}}>
                        <div class=" w3-text-black s1 " style = {{ backgroundColor: 'rgba(173,216,230, 0)'}}>
                            <Link to="/">Home</Link>
                        </div>
                        
                        {/* <div class="w3-btn s4 " style = {{ backgroundColor: 'rgba(173,216,230, 0)'}} >
                            <Link to='#inicio' >Instrução Início</Link>
                        </div>
                        <div class="w3-btn  s4 " style = {{ backgroundColor: 'rgba(173,216,230, 0)'}} >
                            <Nav.Link href="#NovUtente" >Instrução Novo Utente</Nav.Link>
                        </div>
                        <div class="w3-btn  s4" style = {{ backgroundColor: 'rgba(173,216,230, 0)'}}>
                            <Nav.Link href="#Utente" >Instrução Utente</Nav.Link>
                        </div> */}
                        
                        <div class="w3-col s1 w3-center">
                            <Sidebar/>
                        </div>

                    </div>
                    <div class=" w3-center " style={{fontSize: '42px', paddingBottom: '24px'}}>
                        <h1 class=" w3-lobster">Drug Interaction</h1>
                    </div>

                </div>
            </div>

            
            
       
    ) 
}

export default Header;