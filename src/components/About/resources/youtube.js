import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import { useState } from 'react';
// [FreeCodeCamp,Coding Train,Alvin the Programmer,PedroTech,Bro Code]
const channelIDs = ['UCvHKiUI75ytqUcN851fRR2w','UCvjgXvBlbQiydffZU7m1_aw','UCilIG8V10ZGXaLHxvEa_UfA','UC8S4rDRZn6Z_StJ-hh7ph8g','UC4SVo0Ue36XCfOyb5Lh1viQ'] 
const youtubeURL = "https://www.googleapis.com/youtube/v3/channels"



  
const YouTube = () =>{
  let [title, setTitle] = useState('')
  let [thumbnail, setThumbnail] = useState('')
  let [viewCount,setViewCount] = useState(0);
  let [subCount,setSubCount] = useState(0);
  let [videoCount,setVideoCount] = useState(0);
   axios.get(`${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[4]}`)
  .then((response)=> {
    // handle success
    console.log(response.data.items[0]);
    setTitle(response.data.items[0].snippet.title)
    setThumbnail(response.data.items[0].snippet.thumbnails.high.url)
    setSubCount(response.data.items[0].statistics["subscriberCount"])
    setVideoCount(response.data.items[0].statistics["videoCount"])
    setViewCount(response.data.items[0].statistics["viewCount"])
    
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });


  return(
    <div>
     <h1>{title}</h1>
     <img src ={thumbnail} alt='Channel thumbnails' className='channelThumbnails'/>
     <p>Subs: {subCount}</p>
     <p>Views: {viewCount}</p>
     <p>Videos: {videoCount} </p>
     <button href="">Watch on YouTube<FontAwesomeIcon icon={faYoutube} className="text-fourth fa-2xl mx-3 faIcon" /></button>
    </div>
  )
}
export default YouTube;