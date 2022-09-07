import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Email = () => {
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully ✅');
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <Form className="border border-3 border-fourth m-2" onSubmit={sendEmail} ref={form}>
      <Form.Group className="mb-3">
        <Row className="m-3">
          <Col lg={6}>
            <Form.Label className="text-fourth" placeholder="Enter Your first name">
              First Name
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" name="firstName"></Form.Control>
          </Col>
          <Col>
            <Form.Label className="text-fourth" placeholder="Enter Your Last name">
              Last Name
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter Last name" name="lastName"></Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <Row className="m-3">
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-fourth">Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" name="email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Label className="text-fourth">Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Company" name="company" />
        </Col>
      </Row>
      <Row className="m-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-fourth">Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Leave a message for Pete here"
            className="form-textArea"
            name="message"
          />
        </Form.Group>
      </Row>
      <Row className="m-3">
        <Col className="d-flex justify-content-center">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 200, damping: 10 }}>
            <Button type="submit" className="mb-2 bg-fourth border-secondary text-primary border">
              Submit <FontAwesomeIcon icon={faCheckCircle} />
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Form>
  );
};

export default Email;
