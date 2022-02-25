import './navbar.css';
import logo from  '../assets/shared/logo.svg';

export default function Navbar() {
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
                <span id='home' className='nav-item'><b>00</b><span className='page-name'>HOME</span></span>
                <span id='destination' className='nav-item'><b>01</b> <span className='page-name'>DESTINATION</span></span>
                <span id='crew' className='nav-item'><b>02</b><span className='page-name'>CREW</span></span>
                <span id='technology' className='nav-item'><b>03</b><span className='page-name'>TECHNOLOGY</span></span>
            </div>
        </div>
    )
}