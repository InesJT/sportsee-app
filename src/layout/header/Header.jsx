import { Link } from 'react-router';

import logo from '/src/assets/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="SportSee" className="header--logo" />
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to={`/profile`}>Profil</Link>
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
