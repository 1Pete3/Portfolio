import TopNav from '../Navbar/navbar';
import './about.css';
import Section from './animation';
import Education from './education/education'
import Hobbies from './hobbies'
import Music from './music'
import Resources from './resources';
const About = () => (
  <div className="AboutPage">
    <TopNav />
    <>
      <Section><Education /></Section>
      <Section><Hobbies /></Section>
      <Section><Music /></Section>
      <Section><Resources /></Section>
    </>
  </div>
);
export default About;
