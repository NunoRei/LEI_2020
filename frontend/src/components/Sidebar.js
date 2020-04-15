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
            <i onClick={() => this.setState({showNav: true})} class="fas fa-bars fa-2x"> Menu</i>
            <SideNav
            showNav        =  {this.state.showNav}
            onHideNav      =  {() => this.setState({showNav: false})}
            title          =  "Drug Interaction"
            items          =  {['Home', 'Utente', 'Quem somos', 'Contactos',<a href='http://localhost:3100/'>Google</a>]}
            titleStyle     =  {{backgroundColor: '#009BCE'}}
            itemStyle      =  {{backgroundColor: '#fff'}}
            itemHoverStyle =  {{backgroundColor: '#66c3e1'}}
            />
            </div>
        );
    }
}


export default Sidebar;