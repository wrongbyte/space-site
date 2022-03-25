import './destination.css';
import data from '../data.json';
import { useState } from 'react';

export default function Destination() {
    const [destinationIndex, setDestinationIndex] = useState(0);
    const getDestinationIndex = (e: any, value: number) => setDestinationIndex(value);

    return (

        <main className="destination">
            <div className='content dest'>
                <span className='page-title'><span className='page-number'>01</span> PICK YOUR DESTINATION</span>
                <div className='img-wrapper'>
                    <img src={data.destinations[destinationIndex].images.png} className='destination-image'/>
                </div>

                <section className='destination-info'>

                    <nav className='destination-nav'>
                        {
                            data.destinations.map((destination, index) => {
                                if (index === destinationIndex) {
                                    return (
                                        <span onClick={(event) => { getDestinationIndex(event, index); }} key={index} className='nav-item active-destination' data-index={index}>{destination.name}</span>
                                    )
                                }
                                return (
                                    <span onClick={(event) => { getDestinationIndex(event, index); }} key={index} className='nav-item' data-index={index}>{destination.name}</span>
                                )
                            })
                        }
                    </nav>

                    <span className='destination-name'>{data.destinations[destinationIndex].name}</span>

                    <p className='destination-description'>{data.destinations[destinationIndex].description}</p>

                    <hr className='dest-line'/>
                    
                    <div className='destination-time-wrapper'>
                        <div className='destination-time'>
                            <div>
                                <p className='destination-time-title'>avg. distance</p>
                                <p className='destination-time-info'>{data.destinations[destinationIndex].distance}</p>
                            </div>
                            <div>
                                <p className='destination-time-title'>Est. travel time</p>
                                <p className='destination-time-info'>{data.destinations[destinationIndex].travel}</p>
                            </div>
                        </div>
                        <div className='test'></div>
                </div>
            </section>

            </div>
        </main>
    )
}