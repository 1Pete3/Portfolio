import { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubeChannelContainer from './youtubeChannelContainer';

// [FreeCodeCamp,Coding Train,Alvin the Programmer,PedroTech,Bro Code]
const YouTube = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const channelIDs = [
    'UCvHKiUI75ytqUcN851fRR2w',
    'UCvjgXvBlbQiydffZU7m1_aw',
    'UCilIG8V10ZGXaLHxvEa_UfA',
    'UC8S4rDRZn6Z_StJ-hh7ph8g',
    'UC4SVo0Ue36XCfOyb5Lh1viQ',
    'UC8butISFwT-Wl7EV0hUK0BQ',
    'UC4JX40jDee_tINbkjycV4Sg',
  ];
  const youtubeURL = 'https://www.googleapis.com/youtube/v3/channels';

  useEffect(() => {
    for (let i = 0; i < channelIDs.length; i++) {
      axios
        .get(
          `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[i]}`
        )
        .then((response) => {
          // handle success
          setYoutubeData((youtubeData) => [...youtubeData, response.data.items[0]]);
          console.log(Number(response.data.items[0].statistics.viewCount).toLocaleString());
        })
        .catch((error) => {
          // handle error

          console.log(error);
        })
        .then(() => {
          // always executed
        });
    }
  }, []);

  const channels = youtubeData.map((items) => {
    return <YouTubeChannelContainer key={items.id} items={items} />;
  });

  return <div className='channelCard'>{channels}</div>;
};
export default YouTube;
