import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>

    <nav>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </nav>

    <p> 2019 	&copy; Jon Doe</p>

  </footer>
);

export default Footer;
