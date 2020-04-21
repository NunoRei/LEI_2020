import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import SideNav from 'react-simple-sidenav';

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
            <div>
            <i onClick={() => this.setState({showNav: true})} class="fas fa-bars fa-4x w3-button w3-hover-blue w3-round-xlarge"> 
            </i>
            <SideNav
                showNav        =  {this.state.showNav}
                onHideNav      =  {() => this.setState({showNav: false})}
                title          = {this.title}
                items          =  {[
                <Link to="/"><HomeIcon />Home</Link>, 
                <Link to="/utente"><PersonIcon />Utente</Link>, 
                <Link to="/sobre"><InfoIcon/>About us</Link>, 
                'Contactos',
                ]}
                titleStyle     =  {{backgroundColor: '#009BCE'}}
                itemStyle      =  {{backgroundColor: ''}}
                itemHoverStyle =  {{backgroundColor: '#66c3e1'}}
            />
            </div>
        );
    }
}


export default Sidebar;