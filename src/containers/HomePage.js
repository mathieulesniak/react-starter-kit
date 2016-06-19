import React from 'react';
import { Link } from 'react-router';

const HomePage = () =>
  (<div>
    <h1>My super react app</h1>
    <ul>
      <li><Link to="/about">About page</Link></li>
      <li><Link to="/bad-page">404 handling example</Link></li>
    </ul>
  </div>);

export default HomePage;
