import './About.css';

function About() {
    return (
        <div className="about-us-container">
            <header className="header">
                <h1>About Us</h1>
            </header>
            <div className="about-content">
                <h2>Welcome to the Student Attendance Management System</h2>
                <p>
                    This system is designed to streamline the process of tracking student attendance in academic institutions. 
                    It offers an intuitive interface for both faculty and students, allowing for easy management of attendance data.
                </p>
                <section className="team-section">
                    <h3>Our Team</h3>
                    <p>We are a group of passionate developers and educators working to enhance the educational experience by simplifying administrative tasks.</p>
                </section>
                <section className="mission-section">
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to create easy-to-use tools for educational institutions to help them maintain accurate attendance records 
                        and improve communication between students, faculty, and staff.
                    </p>
                </section>
            </div>
            <footer className="footer">
                <button className="nav-btn">Home</button>
                 <button className="nav-btn">Contact Us</button> 
               
            </footer>
        </div>
    );
}

export default About;