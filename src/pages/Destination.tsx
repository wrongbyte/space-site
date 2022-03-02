import './destination.css';
import destImage from '../assets/destination/image-moon.png'
export default function Destination() {
    return (
        <main className="destination">
            <span className='pick-destination'><span className='destination-number'>01</span> PICK YOUR DESTINATION</span>

            <img src={destImage} className='destination-image'></img>

            <section className='destination-info'>
                <nav className='destination-nav'>
                    <span className='nav-item active-destination'>MOON</span>
                    <span className='nav-item'>MARS</span>
                    <span className='nav-item'>EUROPA</span>
                    <span className='nav-item'>TITAN</span>
                </nav>

                <span className='destination-name'>MOON</span>
                <p className='destination-description'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                <hr className='dest-line'/>
                
                <div className='destination-time'>
                    <div>
                        <p className='destination-time-title'>avg. distance</p>
                        <p className='destination-time-info'>384,400 km</p>
                    </div>
                    <div>
                        <p className='destination-time-title'>Est. travel time</p>
                        <p className='destination-time-info'>3 days</p>
                    </div>
                    <div></div>
                </div>

            </section>
        </main>
    )
}