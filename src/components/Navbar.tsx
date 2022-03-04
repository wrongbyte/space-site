import './navbar.css';
import logo from  '../assets/shared/logo.svg';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className='navbar-div'>
            <div className='wrapper'>
                <img id='logo' src={logo} alt='logo'></img>
                <div className='line'>
                    <hr></hr>
                </div>
            </div>

            <div className='navbar-background'></div>
            
            <div className='pages-wrapper'>
                
                <span id='home' className={`nav-item ${pathname === '/' && 'active-page'}`}><b>00</b><span className='page-name'><Link to='/'>HOME</Link></span></span>
                
                <span id='destination' className={`nav-item ${pathname === '/destination' && 'active-page'}`}><b>01</b><span className='page-name'><Link to='/destination'>DESTINATION</Link></span></span>
                
                <span id='crew' className={`nav-item ${pathname === '/crew' && 'active-page'}`}><b>02</b><span className='page-name'><Link to='/crew'>CREW</Link></span></span>
                
                <span id='technology' className={`nav-item ${pathname === '/technology' && 'active-page'}`}><b>03</b><span className='page-name'><Link to='/technology'>TECHNOLOGY</Link></span></span>

            </div>
        </div>
    )
}