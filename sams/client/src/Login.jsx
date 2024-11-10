import { useState } from 'react';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let formValid = true;
        let errorMessages = { username: '', password: '' };

        // Check for empty username
        if (!username) {
            formValid = false;
            errorMessages.username = 'This field is required';
        }

        // Check for empty password
        if (!password) {
            formValid = false;
            errorMessages.password = 'This field is required';
        }

        if (formValid) {
            console.log('Form submitted successfully');
            // Add your form submission logic here
        } else {
            setErrors(errorMessages);
        }
    };

    return (
        <div className="login-container">
            {/* Header */}
            <header className="header">
                <h1>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
            </header>

            {/* Login Form */}
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter name"
                        />
                        {errors.username && <span className="error-message">{errors.username}</span>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <div className="actions">
                        <a href="#" className="forgot-link">Forgot password?</a>
                        <button type="submit" className="login-btn">Login</button>
                        <button type="button" className="signup-btn">Sign Up</button>
                    </div>
                </form>
            </div>

            {/* Footer Navigation */}
            <footer className="footer">
                <button className="nav-btn">Home</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Contact</button>
            </footer>
        </div>
    );
}

export default Login;
