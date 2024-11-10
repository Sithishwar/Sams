import { useState } from 'react';
import './Contact.css'
  // Create a separate CSS file for Contact styles

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let formValid = true;
        let errorMessages = { name: '', email: '', message: '' };

        // Validate name
        if (!name) {
            formValid = false;
            errorMessages.name = 'Name is required';
        }

        // Validate email
        if (!email) {
            formValid = false;
            errorMessages.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formValid = false;
            errorMessages.email = 'Email is not valid';
        }

        // Validate message
        if (!message) {
            formValid = false;
            errorMessages.message = 'Message is required';
        }

        if (formValid) {
            console.log('Message sent:', { name, email, message });
            // Add your form submission logic here (e.g., sending email, saving to DB, etc.)
        } else {
            setErrors(errorMessages);
        }
    };

    return (
        <div className="contact-container">
            <header className="header">
                <h1>Contact Us</h1>
            </header>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <div className="actions">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>

            <footer className="footer">
         

                 <button className="nav-btn">Home</button> 
                 <button className="nav-btn">About</button> 
               
                
            </footer>
        </div>
    );
}

export default Contacts;
