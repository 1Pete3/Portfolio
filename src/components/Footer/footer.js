import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './footer.css';
const PageFooter = () => (
  <div className="container-fluid bg-primary py-1 fixed-bottom">
    <div className="d-flex justify-content-center">
      <a href="https://www.linkedin.com/in/peter-skowronek/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-fourth  fa-2xl mx-3 faIcon" />
      </a>
      <a href="https://github.com/1Pete3" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-fourth fa-2xl mx-3 faIcon" />
      </a>
      <a href="mailto:peterskowronek@my.ccsu.edu" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="text-fourth fa-2xl mx-3 faIcon" />
      </a>
    </div>
  </div>
);

export default PageFooter;
