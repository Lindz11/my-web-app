import { Component } from 'react';
import './navbar.css';
import { navbarMenuItems } from './navbarMenuItems';
import { Link } from 'react-router-dom';

class KeebNavbar extends Component {
  state = {clicked: false};
  switchClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">KeebHub</h1>
        <div className='menu-icons' onClick={this.switchClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navbarMenuItems.map((item,index) =>{
            return(
              <li key={index}>
                <Link className = {item.cName} to={item.url}>
                  <i className = {item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button>Sign Up</button>
      </nav>
    )
  }
}

export default KeebNavbar;