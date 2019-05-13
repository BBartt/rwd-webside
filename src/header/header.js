import React from 'react';
import styles from './header.module.scss';

import { Button } from 'reactstrap';

const Header = () => (
  <header className={styles.header}>
    <h1>lorem ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem qui praesentium molestiae aperiam excepturi cum sint voluptatibus molestias a corporis illum expedita voluptas laborum ratione facilis, possimus doloribus, suscipit assumenda!
    </p>
    <Button color="secondary">lorem ipsum</Button>
  </header>
);

export default Header;
