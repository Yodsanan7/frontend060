'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const user = JSON.parse(localStorage.getItem('user')); // Assume user data is stored here
      if (user) {
        setUsername(user.username);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Remove user data
    setIsLoggedIn(false);
    setUsername('');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <Link href="/" className={`navbar-brand ${styles.navbarBrand}`}>
        <img src="/img/2.png" className={styles.logo} alt="Logo" />
      </Link>
      <button
        className={`navbar-toggler ${styles.navbarToggler}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center">
          <li className="nav-item mx-2">
            <Link href="/" className="nav-link fs-5 text-dark">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="/about" className="nav-link fs-5 text-dark">About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="/Service" className="nav-link fs-5 text-dark">Services</Link>
          </li>
          
          <li className="nav-item mx-2">
            <Link href="/Contact" className="nav-link fs-5 text-dark">Contact</Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item mx-2">
              <Link href="/users" className="nav-link fs-5 text-dark">Users</Link>
            </li>
          )}
        </ul>
      </div>

      <div className={styles.buttons}>
        {isLoggedIn ? (
          <div className={styles.navbarTextContainer}>
            <span className={`navbar-text ${styles.navbarText}`}>Welcome, {username}</span>
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline-primary">Login</Link>
            <Link href="/signup" className="btn btn-outline-primary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
