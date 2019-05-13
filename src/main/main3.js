import React from 'react';
import styles from './main.module.scss';

const Main3 = () => (
  <main>
    <article className={styles.article}>
      <img
        className={styles.img}
        src="https://picsum.photos/1000/1000/"
        alt=""
      />
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <p className="col-12 col-lg-4">
          <h1 className="text-muted">lorem ipsum dolor</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem, unde autem dolor repudiandae quia libero fuga suscipit provident corporis, deleniti vel alias eaque expedita enim? Doloribus facilis totam voluptas eveniet earum culpa voluptatibus minus, enim ab odit fuga atque tempora non! Quos, ea earum aliquam, tempora quisquam dolorum et!
        </p>
        <p className="col-12 col-lg-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem, unde autem dolor repudiandae quia libero fuga suscipit provident corporis, deleniti vel alias eaque expedita enim? Doloribus facilis totam voluptas eveniet earum culpa voluptatibus minus, enim ab odit fuga atque tempora non! Quos, ea earum aliquam, tempora quisquam dolorum et!
        </p>
        <p className="col-12 col-lg-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem, unde autem dolor repudiandae quia libero fuga suscipit provident corporis, deleniti vel alias eaque expedita enim? Doloribus facilis totam voluptas eveniet earum culpa voluptatibus minus, enim ab odit fuga atque tempora non! Quos, ea earum aliquam, tempora quisquam dolorum et!
        </p>
      </div>

    </article>
  </main>
);

export default Main3;
