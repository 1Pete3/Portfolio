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
import 'bootstrap/dist/css/bootstrap.min.css';

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

const travelCss = `.countryFlag
{
  width: 18px;
  height: 18px;
}`;

const code_locationjs = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Location(props) {
  return (
    <Container>
      <Row className="my-3 border-bottom border-danger border-2">
        <Col sm={12} lg={6}  className=" d-flex align-items-center justify-content-center">
          <img src={props.x.imageUrl} alt="Location" className="w-75"></img>
        </Col>
        <Col sm={12} lg={6} className="p-3 text-center">
            <p className="text-uppercase">
              <FontAwesomeIcon icon={faLocationDot} className="text-danger" /> &nbsp;
              {props.x.location} 
            </p>
            <a href={props.x.googleMapsUrl} target="_new">
              View on Google Maps
            </a>
            &nbsp;
            <img
              src={props.x.flag}
              alt="Country flag"
              className="countryFlag
"
            ></img>
         
          <h1>{props.x.title}</h1>
          <p>
            {props.x.startDate} - {props.x.endDate}
          </p>
          <p>{props.x.description}</p>
        </Col>
      </Row>
    </Container>
  );
}`;

const code_navbar = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  return (
    <nav className='bg-danger p-1'>
      <h2 className="text-center text-light">
        <FontAwesomeIcon icon={faEarthAmerica}/>
        &nbsp;
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
    <div className="bg-secondary text-third text-center border border-top-0 border-5 border-dark mb-5">
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
            'react-bootstrap': '^2.5.0',
            'bootstrap': '^5.2.2'
          },
        }}
      />
    </div>
  );
}
