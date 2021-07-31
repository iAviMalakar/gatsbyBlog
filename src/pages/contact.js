import React from 'react'
import Header from '../components/Header'
import './contact.css'

const contact = () => {

    const alertFunction = (e) => {
        e.preventDefault();
        alert("Your message has been received. We will contact you soon!")
    }
    return (
        <div className="contact_header">
            <Header/>
            <div className="contact_section">
                <div className="contact_form">
                    <form method="post">
                        <div className="contact_title">Contact</div>
                        <div className="field">
                            <label>Name</label>
                            <input type='text' name='name' />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type='text' name='email' />
                        </div>
                        <div className="field">
                            <label>Message</label>
                            <textarea name="message" rows='6'></textarea>
                        </div>
                        <div className="submit">
                            <button type="submit" className="btn_med" onClick={alertFunction}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default contact
