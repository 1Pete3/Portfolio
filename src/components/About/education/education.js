import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Cards from './cards';
import './education.css';
const Education = () => (
  <div>
    <h1 className="text-third text-center">
      <strong>
        Education <FontAwesomeIcon icon={faGraduationCap} className="fa-bounce" />
      </strong>
    </h1>

    <motion.div initial={{ opacity: 1, scale: 1, x: -2200 }} animate={{ x: 0 }} transition={{ duration: 5, delay: 0 }}>
      <h4 className="text-third text-center">
        I graduated from{' '}
        <a href="https://www2.ccsu.edu/" target="_blank" rel="noreferrer">
          Central Connecticut State University
        </a>{' '}
        in May 2022. Where I obtained a Bachelors degree in Computer Science with a minor in business. Throughout my
        college career I learned many valuable skills and took some very interesting classes. As a Computer Scientist I
        realize that education is extremely important, I am practicing my skills everyday and learning new concepts
        through some of the resources seen at the bottom of the page. I am a life long learner and will continue to grow
        my problem solving techniques. To view some of my skills please scroll through and click the cards below.
      </h4>
      <Cards />
    </motion.div>
  </div>
);

export default Education;
