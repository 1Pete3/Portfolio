import TopNav from '../Navbar/navbar';
import TravelJournal from './traveljournal';
import BankTeller from './bankteller';
import Github from './github';
import ProjectContainer from './projectContainer';
import './projects.css';
const Projects = () => (
  <div>
    <TopNav />
    <ProjectContainer
      title="Portfolio"
      description="This project was created using React, it features various places that I have visted. Feel free to mess around
        with it by modifying the files. Different files can be accessed by
        clicking on the items in the left navbar.This project can also be opened in code sandbox by
        pressing the icon in the bottom right corner of the project."
      githubUrl="https://github.com/1Pete3/Portfolio"
    />
    <ProjectContainer
      title="Bank Teller"
      description=""
      githubUrl="https://github.com/1Pete3/Bank-Teller"
    />
    
    
  </div>
);
export default Projects;
