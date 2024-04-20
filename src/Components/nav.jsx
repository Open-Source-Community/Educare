import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/stylesheets/nav.scss';
import Logo from '../assets/Images/logo.svg';
import Home from '../assets/Images/home.svg';
import Doc from '../assets/Images/doc.svg';
import News from '../assets/Images/news.svg';
import Contact from '../assets/Images/contact.svg';
import Assignments from '../assets/Images/assignments.svg';

export default function Nav() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    setCurrentLocation(location.pathname.toLowerCase());
  }, [location]);

  return (
    <nav>
      <Link to="/">
        <img className='logo' src={Logo} alt="Logo" />
      </Link>

      <ul>
        <NavItem to="/" icon={Home} label="Home" currentLocation={currentLocation} />
        <NavItem to="/lessons" icon={Doc} label="Lessons" currentLocation={currentLocation} />
        <NavItem to="/assignments" icon={Assignments} label="Assignments" currentLocation={currentLocation} />
        <NavItem to="/news" icon={News} label="News" currentLocation={currentLocation} />
        <NavItem to="/contact" icon={Contact} label="Ask a question" currentLocation={currentLocation} />
      </ul>
    </nav>
  );
}

function NavItem({ to, icon, label, currentLocation }) {
  return (
    <li className={currentLocation === to ? 'active' : ''}>
      <img src={icon} alt={label} />
      <Link to={to}>{label}</Link>
    </li>
  );
}
