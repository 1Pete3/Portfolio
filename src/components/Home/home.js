import TopNav from '../Navbar/navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Projects from '../Projects/projects';
import Notifications from './notifications';
import { LinkContainer } from 'react-router-bootstrap';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => (
  <div className="HomePage bg-third text-fourth">
    <TopNav />
      <Card className="p-3 m-5 w-50 bg-secondary border border-3" border="fourth">
        <Card.Body>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Card.Title className="fs-1 text-primary mb-3"> Welcome ! </Card.Title>
          </motion.div>
          <Card.Text className="text-third">
            I am a software developer who has explored many different programming languages & technologies. Feel free to
            get know me by checking out the links on the navbar or press the button below to view some of my projects{' '}
          </Card.Text>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 5, delay: 8 }}
          >
            <LinkContainer to="/Projects">
              <Button variant="primary" size="sm" className="text-third mt-3">
                Check Out Peter's Projects
              </Button>
            </LinkContainer>
          </motion.div>
        </Card.Body>
      </Card>
  </div>
);

export default Home;
