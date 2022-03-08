import './technology.css';
import data from '../data.json';
import { useState } from 'react';

export default function Technology() {
    const [technologyIndex, setTechnologyIndex] = useState(0);
    const getTechnologyIndex = (e: any, value: number) => setTechnologyIndex(value);
    return (
        <main className='technology'>
            <span className='page-title'><span className='page-number'>03</span> SPACE LAUNCH 101</span>
            <div className='technology-wrapper'>
                <section className='technology-info'>
                    <nav className='technology-nav'>
                    {
                        data.technology.map((technology, index) => {
                            if (index === technologyIndex) {
                                return (
                                    <div onClick={ (event) => getTechnologyIndex(event, index) } key={index} className='technology-nav-button-active'>{index}</div>
                                    )
                                }
                                return (
                                    <div onClick={ (event) => getTechnologyIndex(event, index) } key={index} className='technology-nav-button'>{index}</div>
                                    )
                                })
                    }
                    </nav>

                    <div className='technology-text'>
                        <span className='terminology'>THE TERMINOLOGY…</span>
                        <span className='technology-name'>{data.technology[technologyIndex].name}</span>
                        <span className='technology-description'>{data.technology[technologyIndex].description}</span>
                    </div>
                </section>
                <picture>
                    <source media='(max-width:1020px)' srcSet={data.technology[technologyIndex].images.landscape}/>
                    <img className='technology-image' src={data.technology[technologyIndex].images.portrait}/>
                </picture>

            </div>
        </main>
    )
}