import React, { useState } from 'react';
import './education.css';
const Skills = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flipcard" onClick={handleToggle}>
      <div
        className={isFlipped ? 'flipcardContent flipcardBack border-4 rounded-4' : 'flipcardContent border-4 rounded-4'}
      >
        <div className="flipcardFace flipcardFront border border-fourth rounded-4">
          <img src={props.item.img} className="flipcardLogo" alt="Skills logos" />
        </div>
        <div className="flipcardFace flipcardBack border border-fourth rounded-4 text-center">
          <h1 className="fs-4 mt-1 fw-bold ">{props.item.skill}</h1>
          <div className="mt-5 mx-2">
            <a href={props.item.attribute} target="_blank" rel="noreferrer" title={props.item.attributeTitle}>
              {props.item.attributeText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
