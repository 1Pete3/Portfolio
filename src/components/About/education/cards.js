import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import './education.css';
import Skills from './skills';
import skillsData from './skillsData';
const Cards = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const scrollCards = skillsData.map((item) => {
    return <Skills key={item.id} item={item} className='scrollCards' />;
  });

  return (
    <>
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg progessCircle" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
      />
    </svg>
    <ul ref={ref}>
    {scrollCards}
    </ul>
  </>
  );
};

export default Cards;