import React,{Component} from 'react';
import SideNav from 'react-simple-sidenav';

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            showNav:false,
        }
    }

    title = <h1>Drug interaction </h1>;
    
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
                <a href='http://localhost:3000/'>Home</a>, 
                <a href='http://localhost:3000/utente'>Utente</a>, 
                <a href='http://localhost:3000/sobre'>About us</a>, 
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