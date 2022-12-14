import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const YouTubeChannelContainer = (props) => {
  return (
    <div className="channelInfo bg-third border border-3 border-primary">
      <h1 className="channelTitle text-primary">{props.items.snippet.title}</h1>
      <hr className='text-primary'/>
      <img src={props.items.snippet.thumbnails.high.url} alt="Channel thumbnail" className="thumbnail" />
      <div className="text-light channelNumbers">
        <p>Videos: {Number(props.items.statistics.videoCount).toLocaleString()}</p>
        <p>Subs: {Number(props.items.statistics.subscriberCount).toLocaleString()}</p>
        <p>Views: {Number(props.items.statistics.viewCount).toLocaleString()}</p>
      </div>
      <Button
        className="bg-white text-red"
        target="_blank"
        rel="noreferrer"
        href={'https://www.youtube.com/c/' + props.items.snippet.customUrl}
      >
        YouTube <FontAwesomeIcon icon={faYoutube} />
      </Button>
    </div>
  );
};
export default YouTubeChannelContainer;