const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>
                            We are committed to providing the best services to our customers. Our mission is to ensure quality and satisfaction in every interaction.
                        </p>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (234) 567-8901</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow Us</h2>
                        <ul className="social-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Your Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
