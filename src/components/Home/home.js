import TopNav from '../Navbar/navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Notifications from './notifications';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => (
  <div className="HomePage bg-third text-fourth homePage">
    <TopNav />
    <Row className='m-0'>
      <Col xs={12} md={8} className='m-5'>
        <Card className="p-3 bg-secondary border border-3 w-50 mt-5 " border="fourth">
          <Card.Body>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3 }}
            >
              <Card.Title className="fs-1 text-primary mb-3 "> Welcome ! </Card.Title>
            </motion.div>
            <Card.Text className="text-third">
              I am a software developer who has explored many different programming languages & technologies. Feel free
              to get know me by checking out the links on the navbar or press the button below to view some of my
              projects
            </Card.Text>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 5, delay: 8 }}
            >
              <LinkContainer to="/Projects">
                <Button variant="primary" size="sm" className="text-third mt-3 fs-4">
                  Check Out Peter's Projects
                </Button>
              </LinkContainer>
            </motion.div>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-4 me-5 ' >
        <Notifications />
      </Col>
    </Row>
  </div>
);

export default Home;
