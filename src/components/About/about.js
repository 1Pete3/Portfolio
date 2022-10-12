import TopNav from '../Navbar/navbar';
import Section from './animation';
import Education from './education/education'
import Hobbies from './hobbies/hobbies'
import Resources from './resources/resources';
import './about.css';
const About = () => (
  <div className="AboutPage">
    <TopNav />
    <>
      <Section><Education /></Section>
      <Section ><Hobbies /></Section>
      <Section><Resources /></Section>
     
    </>
  </div>
);
export default About;
