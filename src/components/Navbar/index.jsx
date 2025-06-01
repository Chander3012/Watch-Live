import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === '/';

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Watch Live</Link>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {isLandingPage ? (
            <>
              <li><a href="#services">Services</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#request">Request</a></li>
              {/* New links */}
              <li><Link to="/indian">Indian</Link></li>
              {/* <li><Link to="/leaked">Leaked</Link></li> */}
              {/* <li><Link to="/popular">Popular</Link></li> */}
              {/* <li><button className={styles.loginBtn}>Login</button></li> */}
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/free-videos">Free Videos</Link></li>
              {/* New links */}
              {/* <li><Link to="/indian">Indian</Link></li> */}
              {/* <li><Link to="/leaked">Leaked</Link></li> */}
              {/* <li><Link to="/popular">Popular</Link></li> */}
              {/* <li><button className={styles.loginBtn}>Logout</button></li> */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
