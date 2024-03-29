import React from 'react';
import logo from './img/logo.svg';
import styles from './styles.module.scss';

const Home = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
