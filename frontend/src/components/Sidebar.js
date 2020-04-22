import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import SideNav from 'react-simple-sidenav';
import '../App'

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            showNav:false,
        }
    }

    title = <h1>Menu</h1>;
    
    render() {
        return (
            <div >
            <i onClick={() => this.setState({showNav: true})} class="fas fa-bars fa-4x w3-button w3-hover-blue w3-round-xlarge"> 
            </i>
            <SideNav
                showNav        =  {this.state.showNav}
                onHideNav      =  {() => this.setState({showNav: false})}
                title          = {this.title}
                items          =  {[
                <Link to="/" style={{ textDecoration: 'none' }}><i class="fa fa-home"/> Home</Link>, 
                <Link to="/addUtente" style={{ textDecoration: 'none' }}><i class="fa fa-user-plus"/> Adicionar Utente</Link>, 
                <Link to="/utente" style={{ textDecoration: 'none' }}><i class="fa fa-user"/> Utente</Link>,
                <Link to="/sobre" style={{ textDecoration: 'none' }}><i class="fa fa-info-circle"/> About us</Link>, 
                'Contactos',
                ]}
                titleStyle     =  {{backgroundColor: '#009BCE'}}
                itemStyle      =  {{backgroundColor: '#fff',cursor: 'pointer'}}
                itemHoverStyle =  {{backgroundColor: '#66c3e1'}}
            />
            </div>
        );
    }
}


export default Sidebar;