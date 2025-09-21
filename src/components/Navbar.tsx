import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient pt-4">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Globe Icon" width="30" height="30" />
          {t('dream_travel')}
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
          id="navbarNav"
          data-testid="navbar-collapse"
        >
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <Link className="nav-link" to="/destinations">
                {t('destinations')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t('about_us')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t('contact')}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('language')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
                <li><button className="dropdown-item" onClick={() => changeLanguage('pt')}>Português</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;