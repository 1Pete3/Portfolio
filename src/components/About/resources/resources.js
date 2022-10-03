import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import YouTube from './youtube';
const Resources = () => (
  <div>
    <h1 className="text-primary">
      My Favorite Resources <FontAwesomeIcon icon={faLaptopCode} className="fa-bounce" />
    </h1>
    <YouTube />
  </div>
);
export default Resources;
