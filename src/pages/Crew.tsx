import './crew.css';
import data from '../data.json';
import { useState } from 'react';

export default function Crew() {
    const [crewIndex, setCrewIndex] = useState(0);
    const getCrewIndex = (e: any, value: number) => setCrewIndex(value);
    
    return (
        <main className='crew'>
            
            <span className='page-title'><span className='page-number'>02</span> MEET YOUR CREW</span>

            <section className='crew-info'>
                <span className='role'>{data.crew[crewIndex].role}</span>
                <span className='name'>{data.crew[crewIndex].name}</span>
                <span className='bio'>{data.crew[crewIndex].bio}</span>
                <div className='crew-navbar'>
                    {
                    data.crew.map((crewMember, index) => {
                        if (index === crewIndex) {
                            console.log(crewIndex)
                            return (
                                <div onClick={ (event) => getCrewIndex(event, index) } key={index} className='active-button'></div>
                            )
                        }
                        else return (
                            <div onClick={ (event) => getCrewIndex(event, index) } key={index} className='circular-button'></div>
                        )
                    })
                    }
                </div>
            </section>

            <img className='crew-image' src={data.crew[crewIndex].images.png}></img>

        </main>
    )
}