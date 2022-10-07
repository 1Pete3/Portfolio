import { Sandpack } from '@codesandbox/sandpack-react';
import { monokaiPro } from '@codesandbox/sandpack-themes';


const code_appjs = `import NavBar from './navbar';
import Location from './locations';
import data from './data.js';
const locationData = data.map((x) => <Location id={x.id} x={x} />);
function App() {
  return (
    <div className="App">
      <NavBar />
      <section>{locationData}</section>
    </div>
  );
}

export default App;`;

const code_indexjs = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

const code_indexhtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="./hike.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  </body>
</html>`;

const travelCss = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
 }
html {
  margin-top: 0;
}
nav
{
  position: relative;
  background-color:#F55A5A;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}
.JournalTitle
{
  text-align: center;
}
.EarthIcon
{
  padding-right: 15px;
}
.locationImage
{
  width:450px;
  height: 300px;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  display: block;

}
.locationName{
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 10px;
}
.locationDot
{
  margin-right: 5px;
  color: #F55A5A;
}
.locationMapLink, .locationName
{
  display: inline-block;
}

.locationMapLink
{
  margin-left: 15px;
  font-size: 14px;
  color:#918E9B
}
.locationTitle
{
  font-weight: 700;
  font-size: 30px;
  line-height: 30.26px;
  margin-bottom: 20px;
}
.date
{
  margin-bottom: 10px;
}
.location
{
  display: grid;
  row-gap: 15px;
  margin: 20px;
  grid-template-columns: 1fr 3fr;
  border-bottom: #F55A5A ridge;
}
.image
{
  grid-row: 1;
  grid-column: 1;
  display: flex;
  justify-content: center;
}
.text
{
  grid-row: 1;
  grid-column: 2;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 10px;
  margin-bottom:10px;
}
.countryFlag
{
  width: 18px;
  height: 18px;
}`;

const code_locationjs = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
export default function Location(props) {
  return (
    <div className="location">
      <div className="image">
        <img src={props.x.imageUrl} alt="Location" className="locationImage"></img>
      </div>

      <div className="text">
        <span>
          <p className="locationName">
            <FontAwesomeIcon icon={faLocationDot} className="locationDot" />
            {props.x.location}
          </p>
          <a className="locationMapLink" href={props.x.googleMapsUrl} target="_new">
            View on Google Maps <img src={props.x.flag} alt="Country flag" className="countryFlag"></img>
          </a>
        </span>
        <h1 className="locationTitle">{props.x.title}</h1>
        <p className="date">
          {props.x.startDate} - {props.x.endDate}
        </p>
        <p>{props.x.description}</p>
      </div>
    </div>
  );
}`;

const code_navbar = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  return (
    <nav>
      <h2 className="JournalTitle">
        <FontAwesomeIcon icon={faEarthAmerica} className="EarthIcon" />
        My Travel Journal
      </h2>
    </nav>
  );
}`;

const code_datajs = `
export default [
  {
    id: 1,
    title: 'Acadia National Park',
    flag: 'https://cdn-icons-png.flaticon.com/512/330/330459.png',
    location: 'Maine, USA',
    googleMapsUrl: 'https://goo.gl/maps/aXDKr2Vy9ycXEf9ZA',
    startDate: '15 May, 2022',
    endDate: '21 May, 2022',
    description:
      'Acadia National Park protects more than 47,000 acres. Acadia National Park receives more than four million recreational visits each year, making it one of the most-visited national park in the United States. During my trip I visited Cadillac Mountain, Thunder Hole, Sand Beach, Beehive Mountain and many more places. Three of my friends and I stayed in a house in Bar Harbor that we rented through Airbnb. We explored Downtown Bar Harbor stopping by many of the shops and resturants. We got some great donuts from a place called Graffiti donuts and since we were by the coast, getting sea food was a must.',
    imageUrl: 'https://www-01.cruiseamerica.com/getattachment/187d4666-96c8-4fd6-b49d-21393b384c35/attachment.aspx',
  },
  {
    id: 2,
    title: 'Playa del Carmen',
    flag: 'https://cdn-icons-png.flaticon.com/512/330/330433.png',
    location: 'Quintana Roo, MX',
    googleMapsUrl: 'https://goo.gl/maps/oYXmw6kK7dk25xKSA',
    startDate: '20 June, 2017',
    endDate: '26 June, 2017',
    description:
      'Playa del Carmen is a fantastic beach town and extremely popular tourist destination nestled in the southern corner of the Yucatan peninsula. During my trip, I traveled with my family and we stayed at an all inclusive resort. There were shops, resturants, recreational activities and nightly shows. The staff was very friendly and helpful. There were an abundant amount of pools to cool off in which was great since the weather was very humid and hot. The food was excellent as well, there was a variety that helped you not get sick of eating the same things over and over.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chimuadventures.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F09%2Fshutterstock_592128764.jpg&f=1&nofb=1',
  },
  {
    id: 3,
    title: 'Tatry National Park',
    flag: 'https://cdn-icons-png.flaticon.com/512/330/330474.png',
    location: 'Zakopane, PL',
    googleMapsUrl: 'https://goo.gl/maps/oYXmw6kK7dk25xKSA',
    startDate: '27 June, 2012',
    endDate: '20 July, 2012',
    description:
      'The biggest lake in Tatra National Park in Poland, Morskie Oko (or Eye of the Sea in English) is arguably the biggest attraction in Zakopane. The Tatra Mountains are located in the Lesser Poland Voivodeship—Małopolska region, in central-southern Poland. There are around 650 caves in the park with 6 open to the public. I did not visit any caves during my trip. The entire hike was about 19 km (11.8 mi) and took 3 hours. The weather there is very unpredictable so it is best to be prepared for rain, sun shine, and thunder storms all during your hike. All theses conditions were present when I hiked to Morskie Oko. It is important to bring water and snacks as well since it takes quite sometime. I visited different places and towns in Poland as well, but Morskie Oko was my favorite. Some other places I have been are Krakow, Warsaw, Auschwitz-Birkenau, Rzeszow, Leżajsk, Grodzisko and many more. I stayed with many family members and friends. ',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.theculturetrip.com%2Fwp-content%2Fuploads%2F2016%2F03%2F22071628369_1c570cd870_k.jpg&f=1&nofb=1',
  },
];`;

export default function TravelJournal() {
  return (
    <div className="bg-secondary text-third text-center">
      <Sandpack
        options={{
          showLineNumbers: true, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 400, // default - 300
          editorWidthPercentage: 40, // default - 50
        }}
        template="react"
        files={{
          '/App.js': code_appjs,
          '/index.js': code_indexjs,
          '/index.html': code_indexhtml,
          '/index.css': travelCss,
          '/locations.js': code_locationjs,
          '/navbar.js': code_navbar,
          '/data.js': code_datajs,
        }}
        theme={monokaiPro}
        customSetup={{
          dependencies: {
            react: '^18.2.0',
            'react-dom': '^18.2.0',
            'react-scripts': '5.0.1',
            '@fortawesome/fontawesome-svg-core': '^6.1.1',
            '@fortawesome/free-regular-svg-icons': '^6.1.1',
            '@fortawesome/free-solid-svg-icons': '^6.1.1',
            '@fortawesome/react-fontawesome': '^0.2.0',
          },
        }}
      />
    </div>
  );
}
