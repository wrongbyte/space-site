import { Link } from 'react-router-dom';
import './home.css';
export default function Home() {
    return (
        <main className="homepage">
                <div className='info'>
                    <span className='first-phrase'>SO, YOU WANT TO TRAVEL TO</span>
                    <span className='space-text'>SPACE</span>
                    <p className='space-paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>

                <div id='circle'><span className='explore'><Link to='/destination'>EXPLORE</Link></span></div>
        </main>
    )
}