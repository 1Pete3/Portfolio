import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';


import './footer.css';
const PageFooter = () => (
  <div className="container-fluid bg-primary py-1 fixed-bottom mt-4">
    <div className="d-flex justify-content-center">
      <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <a href="https://www.linkedin.com/in/peter-skowronek/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-fourth  fa-2xl mx-3 faIcon" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <a href="https://github.com/1Pete3" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-fourth fa-2xl mx-3 faIcon" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <a href="mailto:peterskowronek@my.ccsu.edu" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="text-fourth fa-2xl mx-3 faIcon" />
        </a>
      </motion.div>
    </div>
  </div>
);

export default PageFooter;
