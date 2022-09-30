import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import HobbyImages from './hobbyImages'
const Hobbies = () => (
  <div>
    <h1 className="text-third">
      <strong>
        Hobbies <FontAwesomeIcon icon={faBasketball} className="fa-bounce" />
      </strong>
    </h1>
      <h4 className="text-third">
        During my free time, I enjoy solving puzzles, building lego sets, watching/playing sports, traveling, collecting
        sneakers, playing video games, going to the gym and hanging out with friends. Most recently, a couple of friends
        and I went to{' '}
        <a href="https://www.visitacadia.com/" target="_blank" rel="noreferrer" className='hobbyLinks'>
          Acadia,Maine
        </a>{' '}
        where we hiked various trails and explored&nbsp;
        <a
          href="https://www.google.com/maps/place/Bar+Harbor,+ME/@44.3583123,-68.410375,11z/data=!3m1!4b1!4m5!3m4!1s0x4caebe4815802593:0x88e91a6528cad91b!8m2!3d44.3876119!4d-68.2039123?hl=en"
          target="_blank"
          rel="noreferrer"
          className='hobbyLinks'
        >
          Bar Harbor.
        </a>
        &nbsp;I have over 40 pairs of shoes in my collection, some of them very rare. I am also very active I like to
        play basketball, kayak, bike and play soccer. When I am feeling a bit lazy, I watch the English Premier League,
        NFL, NBA, NHL and MMA. I play video games ranging from Fifa to Call of Duty. 
      </h4>
      <HobbyImages />

  </div>
);
export default Hobbies;
