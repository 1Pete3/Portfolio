import { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubeChannelContainer from './youtubeChannelContainer';

// [FreeCodeCamp,Coding Train,Alvin the Programmer,PedroTech,Bro Code]
const YouTube = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const youtubeURL = 'https://www.googleapis.com/youtube/v3/channels';
  const channelIDs = [
    'UCvHKiUI75ytqUcN851fRR2w',
    'UCvjgXvBlbQiydffZU7m1_aw',
    'UCilIG8V10ZGXaLHxvEa_UfA',
    'UC8S4rDRZn6Z_StJ-hh7ph8g',
    'UC4SVo0Ue36XCfOyb5Lh1viQ',
    'UC8butISFwT-Wl7EV0hUK0BQ',
    'UC4JX40jDee_tINbkjycV4Sg',
  ];

  const axiosRequest1 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[0]}`
  );
  const axiosRequest2 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[1]}`
  );
  const axiosRequest3 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[2]}`
  );
  const axiosRequest4 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[3]}`
  );
  const axiosRequest5 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[4]}`
  );
  const axiosRequest6 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[5]}`
  );
  const axiosRequest7 = axios.get(
    `${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[6]}`
  );

  useEffect(() => {
    axios
      .all([axiosRequest1, axiosRequest2, axiosRequest3, axiosRequest4, axiosRequest5, axiosRequest6, axiosRequest7])
      .then(
        axios.spread((res1, res2, res3, res4, res5, res6, res7) => {
          setYoutubeData((youtubeData) => [
            res1.data.items[0],
            res2.data.items[0],
            res3.data.items[0],
            res4.data.items[0],
            res5.data.items[0],
            res6.data.items[0],
            res7.data.items[0],
          ]);
        })
      )
      .catch((error) => {
        // handle error

        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);

  const channels = youtubeData.map((items) => {
    return <YouTubeChannelContainer key={items.id} items={items} />;
  });

  return <div className="channelCard">{channels}</div>;
};
export default YouTube;
