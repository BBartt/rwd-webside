import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import styles from './main.module.scss';

const Main1 = () => (
  <article className={styles.article} >
    <Card className="col-6 col-lg-3">
      <CardImg top width="100%" src="https://picsum.photos/300/300/?random" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>

    <Card className="col-6 col-lg-3">
      <CardImg top width="100%" src="https://picsum.photos/300/300/?random" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>

    <Card className="col-6 col-lg-3">
      <CardImg top width="100%" src="https://picsum.photos/300/300/?random" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </article>
);

export default Main1;
