import './navbar.css';
import logo from  '../assets/shared/logo.svg';
import { useLocation, Link } from 'react-router-dom';
import iconMenu from '../assets/shared/icon-hamburger.svg';
import closeMenu from '../assets/shared/icon-close.svg';
import { useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='navbar-div'>
            <div className='wrapper'>
                <img id='logo' src={logo} alt='logo'></img>
                <div className='line'>
                    <hr></hr>
                </div>
            </div>

            <div className='navbar-background'></div>

            <img onClick={() => setShowMenu(!showMenu)} className={`${(!showMenu && 'icon-menu') || 'hidden'}`} src={iconMenu} alt='menu icon'/>
            {   showMenu && 
                <div className='mobile-menu'>
                    <img onClick={() => setShowMenu(!showMenu)} className='close-menu' src={closeMenu} alt='close menu'/>
                    <div className='mobile-pages-wrapper'>
                        <span id='home'><b>00</b><span className='page-name'><Link to='/'>HOME</Link></span></span>
                    
                        <span id='destination'><b>01</b><span className='page-name'><Link to='/destination'>DESTINATION</Link></span></span>
                        
                        <span id='crew' ><b>02</b><span className='page-name'><Link to='/crew'>CREW</Link></span></span>
                        
                        <span id='technology' ><b>03</b><span className='page-name'><Link to='/technology'>TECHNOLOGY</Link></span></span>
                    </div>
                </div>
            }
            
            <div className='pages-wrapper'>
                
                <span id='home' className={`nav-item ${pathname === '/' && 'active-page'}`}><b>00</b><span className='page-name'><Link to='/'>HOME</Link></span></span>
                
                <span id='destination' className={`nav-item ${pathname === '/destination' && 'active-page'}`}><b>01</b><span className='page-name'><Link to='/destination'>DESTINATION</Link></span></span>
                
                <span id='crew' className={`nav-item ${pathname === '/crew' && 'active-page'}`}><b>02</b><span className='page-name'><Link to='/crew'>CREW</Link></span></span>
                
                <span id='technology' className={`nav-item ${pathname === '/technology' && 'active-page'}`}><b>03</b><span className='page-name'><Link to='/technology'>TECHNOLOGY</Link></span></span>

            </div>
        </div>
    )
}