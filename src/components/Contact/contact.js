import TopNav from '../Navbar/navbar';
import MyLocation from './map';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Email from './email';
import {useState,createRef,useEffect} from 'react'
const Contact = () => {
  const [colWidth, setColWidth] = useState(0)
  const square_ref = createRef();
  
  useEffect(() => {
    if(square_ref.current){
      setColWidth(square_ref.current.getBoundingClientRect().width)
    }
 }, [])
  console.log(colWidth)
  return (
    <div className="ContactPage bg-third">
      <TopNav />
      <Container fluid>
        <Row className="m-3">
          <Col xs={12} md={12} lg={12}>
            <Card className="bg-secondary border border-3 border-fourth">
              <Card.Body className="text-center">
                <Card.Title className="fs-1 text-primary mb-3 "> Contact Me 📲 </Card.Title>
                <Card.Text className="text-third fs-5">
                  As a <strong>software developer</strong> I am always looking to expand my skills and learn new things.
                  Currently I am looking for a <strong>full time position</strong> that is remote, hybird, or in office.
                  I would also consider other job types and relocating. I am willing to collaberate with other
                  developers on projects so feel to get in contact through{' '}
                  <a href="https://www.linkedin.com/in/peter-skowronek" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>{' '}
                  or filling the form.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={{ span: 12, order: 'first' }} sm={6} md={6} lg={6} ref={square_ref}>
            <Email />
          </Col>
          <Col xs={{ span: 12, order: 'first' }} sm={6} md={6} lg={6} className="border">
            <MyLocation className="w-100" />
          </Col>
        </Row>
      </Container>
      <div className="bottom"></div>
    </div>
  );
};
export default Contact;
