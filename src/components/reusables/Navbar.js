import React, { Component } from 'react'
import {Link} from 'gatsby'

import logo from '../../images/logo.png'
import {FaCartArrowDown, FaHome} from 'react-icons/fa'

import AboutPage from '../../pages/about'
import ContactPage from '../../pages/contact'


export default class Navbar extends Component {

    state = {
        navbarState:false,
        navbarClass:'collapse navbar-collapse',
        //array of links
        menus: [
        {
            id:1,
            text:'Home',
            url:'/'
        },
        {
            id:2,
            text:'About',
            url:'/about'
        },
        {
            id:3,
            text:'Contact Us',
            url:'/contact'
        }
    ]
    }

    

    myToggler = ()=>{
        this.state.navbarState ? 
            this.setState({
                navbarState:false,
                navbarClass:'collapse navbar-collapse'
            }):
            this.setState({
                navbarState:true,
                navbarClass:'collapse navbar-collapse show'
            })
    }

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-sm bg-theme text-white'>
                    <Link to='/' className='navbar-brand ml-5'>
                        <img src={logo} alt='Logo not loaded.' width='40px'/>
                    </Link>

                    <button className='navbar-toggler' type='button' onClick={this.myToggler}>
                        <span className='text-white'>Menu</span>
                    </button>

                    <div className={this.state.navbarClass}>
                        <ul className='navbar-nav mr-5 ml-auto'>
                            
                            {this.state.menus.map( (menu) =>{

                                return(
                                <li key={menu.id} className='nav-item'>
                                    <Link to={menu.url} className='nav-link text-white'>{menu.text}</Link>
                                </li>
                                )                                
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
