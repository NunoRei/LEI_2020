import React,{Component} from 'react';
import SideNav from 'react-simple-sidenav';

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            showNav:false,
        }
    }
    
    render() {
        return (
            <div>
            <i onClick={() => this.setState({showNav: true})} class="fas fa-bars fa-2x"> 
                <h1 class="w3-center">
                    DRUGS
                </h1>
            </i>
            <SideNav
                showNav        =  {this.state.showNav}
                onHideNav      =  {() => this.setState({showNav: false})}
                title          =  "Drug Interaction"
                items          =  {[
                <a href='http://localhost:3000/'>Home</a>, 
                <a href='http://localhost:3000/utente'>Utente</a>, 
                <a href='http://localhost:3000/sobre'>About us</a>, 
                'Contactos',
                ]}
                titleStyle     =  {{backgroundColor: '#009BCE'}}
                itemStyle      =  {{backgroundColor: '#fff'}}
                itemHoverStyle =  {{backgroundColor: '#66c3e1'}}
            />
            </div>
        );
    }
}


export default Sidebar;