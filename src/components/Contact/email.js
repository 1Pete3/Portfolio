import { useState } from 'react';
import { send } from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import{faCheckCircle} from '@fortawesome/free-regular-svg-icons'
const Email = () => {
  return (
    <Form className="border border-3 border-fourth m-2">
      <Form.Group className="mb-3">
        <Row className="m-3">
          <Col lg={6}>
            <Form.Label className="text-fourth" placeholder="Enter Your first name">
              First Name
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter first name"></Form.Control>
          </Col>
          <Col>
            <Form.Label className="text-fourth" placeholder="Enter Your Last name">
              Last Name
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter Last name"></Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <Row className="m-3">
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-fourth">Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Label className="text-fourth">Company</Form.Label>
          <Form.Control type="email" placeholder="Enter Company" />
        </Col>
      </Row>
      <Row className="m-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-fourth">Message</Form.Label>
          <Form.Control
          required
          as="textarea"
          placeholder="Leave a message for Pete here"
          className='form-textArea'
        />

        </Form.Group>
      </Row>
      <Row className="m-3">
        <Col className='d-flex justify-content-center'>
          <Button className='mb-2 bg-primary text-fourth border-secondary border'> Linked<FontAwesomeIcon icon={faLinkedin} /></Button>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Button type="submit" className='mb-2 bg-fourth border-secondary text-primary border'>Submit <FontAwesomeIcon icon={faCheckCircle} /></Button>
        </Col>
      </Row >
    </Form>
  );
};

export default Email;
