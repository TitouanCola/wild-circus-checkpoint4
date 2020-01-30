import React from 'react';
import Logo from '../../images/logo.png'
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <img src={Logo} alt="Stylized marquee" />
      <h2>Who are we ?</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default HomePage;
