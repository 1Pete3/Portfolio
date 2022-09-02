import TopNav from '../Navbar/navbar';
import MyLocation from './map';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Email from './email';
const Contact = () => (
  <div className="ContactPage bg-third">
    <TopNav />
    <Container fluid>
      <Row>
        <Col className="m-3">
          <Card className="bg-secondary border border-3 mx-5 mt-3 p-3  " border="fourth">
            <Card.Body>
              <Card.Title className="fs-1 text-primary mb-3 "> Contact Me 📲 </Card.Title>
              <Card.Text className="text-third">
                As a software developer I am always looking to expand my skills and learn new things. Currently I am
                looking for a <strong>full time position</strong> that is remote, hybird, or in office. I would also
                consider other job types and relocating. I am willing to collaberate with other developers on projects
                so feel to get in contact through LinkedIn or filling the form.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mx-1 my-3">
        <Col className="mx-5">
          <MyLocation />
        </Col>
        <Col className="mx-5">
          <Email />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Contact;
