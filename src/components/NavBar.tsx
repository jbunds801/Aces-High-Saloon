import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';


const NavBar = () => {
  return (
    <nav className="site-nav px-6 py-9 sm:px-10 lg:px-12" aria-label="Main navigation">
      <NavLink className="site-nav__brand" to="/" end>
        <img
          className='h-16 w-auto'
          src="/Aces-High-Logo.png"
          alt="Aces High Saloon" />
      </NavLink>
      <ul className="site-nav__links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/drinks">Drinks</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar