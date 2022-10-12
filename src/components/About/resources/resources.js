import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import YouTube from './youtube';
import './resources.css';

const Resources = () => (
  <div className="text-center">
    <h1 className="text-primary ">
      My Favorite Resources <FontAwesomeIcon icon={faLaptopCode} className="fa-bounce" />
    </h1>
    <YouTube />
  </div>
);
export default Resources;
