import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="App-header">
        <h1>My Coding Profiles</h1>
        <ul className="profile-links">
          {[
            { name: "Leetcode (Swish30)", url: "https://leetcode.com/swish30/" },
            { name: "Leetcode (Malik23)", url: "https://leetcode.com/u/Malik23/" },
            { name: "CodingNinja", url: "https://www.naukri.com/code360/profile/33704679-b3d8-496b-9f14-b057d1347b49" },
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/swish30/" },
          ].map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <h2>Contact</h2>
        <ul className="contact-links">
          <li>
            <a
              href="https://www.linkedin.com/in/vishwas-malik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:mvmalik23@gmail.com">mvmalik23@gmail.com</a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Theme"
        >
          <span className={`theme-toggle-circle ${darkMode ? "dark" : "light"}`}></span>
        </button>
      </header>
    </div>
  );
}

export default App;
