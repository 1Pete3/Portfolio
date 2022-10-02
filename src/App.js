import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import PageFooter from './components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
      <PageFooter />
      
    </div>
  );
}
export default App;
