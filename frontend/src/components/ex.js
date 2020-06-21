import { stack as Menu } from 'react-burger-menu'
import React from 'react';
import './ex.css'
import { Button } from '@material-ui/core';

class Example extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
    
      render () {
        return (
          <div>
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <h1 className="w3-center">Menu</h1>
                <a className="bm-item w3-center" href="/" onClick={() => this.closeMenu()}>
                    <i class="fas fa-home-lg-alt"></i>
                     Home
                </a>
                <a className="bm-item w3-center" href="/addUtente" onClick={() => this.closeMenu()}>Adicionar Utente </a>
                <a className="bm-item w3-center" href="/utente" onClick={() => this.closeMenu()}>Utente</a>
                <a className="bm-item w3-center" href="/about" onClick={() => this.closeMenu()}>Sobre nós</a>
            </Menu>
            <Button onClick={() => this.toggleMenu()} />
          </div>
        )
      }
}

export default Example;