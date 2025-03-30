import React, { useState } from "react";
import { Link } from "react-router";
function Header() {
  const [log, setLog] = useState("Login");
  return (
    <>
    <header>
      <nav className="nav-img">
        <img src="https://imgs.search.brave.com/zlRQnP9SMZWu4xoprSc6CITNK8mTph8fW6aT_LEJDqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZ3Jh/ZGllbnQtYWJzdHJh/Y3QtbG9nb18yMy0y/MTUwNjg5NjQyLmpw/Zz9zZW10PWFpc19o/eWJyaWQ"></img>
      </nav>
      <nav className="nav-content">
        <ul className="menut">
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Careers</li></Link>
        </ul>
      </nav>
      <nav className="nav-btn">
        <button
          onClick={() => {
            log == "Login" ? setLog("Logout") : setLog("Login");
          }}
        >
          {log}
        </button>
      </nav>
    </header>

    {/* // responsive */}
        
    
          
          <nav role="navigation" id="navbar">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/contact'}><li>Contact Us</li></Link>
              <Link to={'/about'}><li>About</li></Link>
            </ul>
           </div>
          </nav>
     
</>
  );
}

export default Header;
