import React from 'react'
import {AiOutlineFacebook} from 'react-icons/Ai';
import {FaInstagram} from 'react-icons/Fa';
import {GrYoutube} from 'react-icons/Gr';
import {FiTwitter} from 'react-icons/Fi';
import './Footer.css'



const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='FooterLinksWrapper'>
                <div className='FooterDesc'>
                    <h1>WanderLust</h1>
                    <p>Join me and blog your next adventure.</p>
                </div>
                <div className='FooterLinkItems'>
                    <div className='FooterLinkTitle'>Social Media</div>
                    <div className='FooterLink'><AiOutlineFacebook/>Facebook</div>
                    <div className='FooterLink'><FiTwitter/>Twitter</div>
                    <div className='FooterLink'><FaInstagram/>Instagram</div>
                    <div className='FooterLink'><GrYoutube/>Youtube</div>
                </div>
            </div>
        </div>
    )
}

export default Footer

