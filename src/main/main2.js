import React from 'react';
import { Button } from 'reactstrap';
import styles from './main.module.scss';

const Main1 = () => (
  <main>
    <article className={styles.article}>
      <div className="col-12 col-xl-4">
        <h1 className="text-white">Lorem ipsum dolor sit amet.</h1>
        <p className="small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rerum corporis facilis nam provident quibusdam ab modi, ad magnam laborum necessitatibus veritatis quidem quo voluptates facere similique minima. Non laudantium quae ipsum consectetur ullam rerum architecto, harum ratione nesciunt vero optio omnis nam earum fugit provident cumque dicta quasi. Ex!
        </p>
        <Button variant="secondary">lorem ipsum</Button>
      </div>
      <div className="col-12 col-xl-7">
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
        <img className="m-1" src="https://picsum.photos/300/300/?random" alt="" />
      </div>
    </article>
  </main>
);

export default Main1;
