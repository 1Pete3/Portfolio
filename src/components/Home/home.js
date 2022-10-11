import TopNav from '../Navbar/navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Notifications from './notifications';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Home = () => (
  <div className="HomePage bg-third text-fourth homePage h-100 border border-fourth ">
    <TopNav />
    <Container fluid className='homePageContent' >
      <Row className="text-center">
        <Col xs={12} md={12} lg={9} className="d-flex align-items-center justify-content-center mt-5 ">
          <Card className="p-3 bg-secondary border border-3 welcomeCard " border="fourth">
            <Card.Body>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3 }}
              >
                <Card.Title className="fs-1 text-primary "> Welcome ! </Card.Title>
              </motion.div>
              <Card.Text className="text-third">
                I am a software developer who has explored many different programming languages & technologies. Feel
                free to get know me by checking out the links on the navbar or press the button below to view some of my
                projects
              </Card.Text>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, delay: 8 }}
              >
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <LinkContainer to="/Projects">
                    <Button variant="primary" size="sm" className="text-third mt-3 fs-4">
                      Check Out Peter's Projects
                    </Button>
                  </LinkContainer>
                </motion.div>
              </motion.div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-auto" xs={12} md={12} lg={3}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
