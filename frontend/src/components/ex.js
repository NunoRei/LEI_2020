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
                    <div><i class="fa fa-home"></i></div>
                      <div>Home</div>
                </a>
                <a className="bm-item w3-center" href="/addUtente" onClick={() => this.closeMenu()}>
                      <div><i class="fa fa-user-plus"></i></div>
                      <div>Register Patient</div>
                </a>
                <a className="bm-item w3-center" href="/utente" onClick={() => this.closeMenu()}>
                      <div><i class="fa fa-user"></i></div>
                      <div> Patient</div>
               </a>
                <a className="bm-item w3-center" href="/about" onClick={() => this.closeMenu()}>
                      <div><i class="fa fa-info-circle"></i></div>
                      <div>About Us</div>
                </a>
            </Menu>
            <Button onClick={() => this.toggleMenu()} />
          </div>
        )
      }
}

export default Example;