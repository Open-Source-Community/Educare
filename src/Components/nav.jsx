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
  const currentLocation = location.pathname.toLowerCase();

  return (
    <nav>
      <Link to="/">
        <img className='logo' src= {Logo}></img>
      </Link>

      <ul>
        <li>
          <img src= {Home} alt="" />
          <Link to="/" className={currentLocation === '/' ? 'active' : ''} id="home">
          <span className="link-text">Home</span>

          </Link>
        </li>
        <li>
          <img src={Doc} alt="" />
          <Link to="/lessons" className={currentLocation === '/lessons' ? 'active' : ''}>
          <span className="link-text">Lessons</span>

          </Link>
        </li>
        <li>
          <img src={Assignments} alt="" />
          <Link to="/assignments" className={currentLocation === '/assignments' ? 'active' : ''}>
          <span className="link-text">Assignments</span>

          </Link>
        </li>
        <li>
          <img src={News} alt="" />
          <Link to="/news" className={currentLocation === '/news' ? 'active' : ''}>
            <span className="link-text">News</span>
          </Link>
        </li>
        <li>
          <img src={Contact} alt="" />
          <Link to="/contact" className={currentLocation === '/contact' ? 'active' : ''}>
          <span className="link-text">Ask a question</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

