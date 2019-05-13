import React from 'react';
import { Container, Col, Row, Button, Form, Input } from 'reactstrap';
import styles from './form.module.scss';

const FormSection = () => (
<section className={styles.section}>
  <h1>Lorem ipsum dolor sit amet.</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo maiores neque, natus voluptate dignissimos. Nobis pariatur ipsa eum molestias soluta rem totam, sequi perspiciatis, laboriosam corrupti quod et vel.
  </p>

<Container>
  <Form className="col-12">

  <Row>
    <Col xs="6">
      <Input type="text" name="name" placeholder="Imię:" />
    </Col>
    <Col xs="6">
      <Input type="email" name="email" placeholder="E-mail:" />
    </Col>
    <Col xs="12" className="mt-3">
      <Input type="textarea" name="text" placeholder="Treść:" rows="6" />
    </Col>
  </Row>
    <Button className="mt-2">Send Message</Button>
  </Form>
</Container>

</section>
);

export default FormSection;
