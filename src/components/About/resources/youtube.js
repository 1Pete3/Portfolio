import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";


// [FreeCodeCamp,Coding Train,Alvin the Programmer,PedroTech,Bro Code]
const channelIDs = ['UCvHKiUI75ytqUcN851fRR2w','UCvjgXvBlbQiydffZU7m1_aw','UCilIG8V10ZGXaLHxvEa_UfA','UC8S4rDRZn6Z_StJ-hh7ph8g','UC4SVo0Ue36XCfOyb5Lh1viQ'] 
const youtubeURL = "https://www.googleapis.com/youtube/v3/channels"

const YouTube = () =>{
 
  const data =[]
  axios.get(`${youtubeURL}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${channelIDs[1]}`)
  .then((response)=> {
    // handle success
    console.log(response.data.items[0].statistics)
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
      <p>
        failed to load
      </p>
    </div>
    )

}
export default YouTube;