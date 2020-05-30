import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <section className="bg">
        <section className="bg-header">
          <a href="/">
            <h1>GrowthTech</h1>
          </a>
          <ul>
            <a href="">
              <Link to="/about">
                <li> About </li>
              </Link>
            </a>
          </ul>
        </section>
      </section>
      <section className="bg-content">{children}</section>
    </>
  );
}

export default Layout;
