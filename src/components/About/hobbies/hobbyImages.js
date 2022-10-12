import acadia1 from '../../../images/acadia1.jpg';
import acadia2 from '../../../images/acadia2.jpg';
import acadia3 from '../../../images/acadia3.jpg';
import sneakers from '../../../images/sneakers.jpg';
import basketball from '../../../images/basketball.jpg';
import mar from '../../../images/mar.jpg';
import pc from '../../../images/pc.jpg';
import car from '../../../images/Car.jpg';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './hobbies.css';
function HobbyImages() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Carousel
      fade
      className={
        windowWidth > 1024 ? "carouselContainer mt-5 w-75 h-auto mx-auto" : "carouselContainer mt-5 w-100 h-auto"
      }
    >
      <Carousel.Item>
        <img className="d-block mx-auto border border-3 border-fourth shadow-lg w-100" src={acadia1} alt="Acadia" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block mx-auto border border-3 border-fourth shadow-lg w-100" src={acadia3} alt="Sand beach" />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto border border-3 border-fourth shadow-lg w-100"
          src={acadia2}
          alt="Acadia water"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto border border-3 border-fourth shadow-lg w-100"
          src={sneakers}
          alt="Shoe Collection"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto border border-3 border-fourth shadow-lg w-100"
          src={basketball}
          alt="Basketball court"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block mx-auto border border-3 border-fourth shadow-lg w-100" src={mar} alt="Mario" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block mx-auto border border-3 border-fourth shadow-lg w-100" src={pc} alt="Pc" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block mx-auto border border-3 border-fourth shadow-lg w-100" src={car} alt="Car" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HobbyImages;
