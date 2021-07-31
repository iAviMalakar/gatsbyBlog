import React from 'react'
import Video from '../video/shot.mp4'
import './Hero.css'


const Hero = () => {
    return (
        <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' src={Video} type="video/mp4" autoPlay loop muted playsInLine/>
            </div>
            <div className='HeroContent'>
                <div className='HeroItems'>
                    <div className='HeroH1'>Not all those who wander are lost</div>
                    <div className='HeroP'>J.R.R. Tolkien</div>
                </div>
            </div>
        </div>
    )
}

export default Hero

