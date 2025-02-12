import { useContext } from 'react';
import { Link } from 'react-router';

import UserContext from '/src/context.js';

import logo from '/src/assets/logo.svg';

import './Header.scss';

const Header = () => {
  const userId = useContext(UserContext);
  return (
    <header className="header">
      <img src={logo} alt="SportSee" className="header--logo" />
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to={`/user/${userId}`}>Profil</Link>
          </li>
          <li>
            <Link to="/settings">Réglages</Link>
          </li>
          <li>
            <Link to="/community">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
