import TopNav from '../Navbar/navbar';
import TravelJournal from './traveljournal';
import ProjectContainer from './projectContainer';
import './projects.css';
const Projects = () => {
  return (
    <div>
      <TopNav />
      <ProjectContainer
        title="Portfolio"
        description="Curious how I created this website? Check out the code on GitHub. Various API's were used in this website like emailjs, YouTube, Google Maps, etc. For styling, Bootstrap, React Bootstrap, SCSS, CSS and Framer Motion were all used. My animations come from Framer Motion as well, and the Icons are from fontawesome. I created my custom logo on the top left nav bar by using Canva and Pixelartmaker. The dependencies that were used can be found in the code as well, there's a lot. I did not include a sandbox or images for this project since you are on my website already. "
        githubUrl="https://github.com/1Pete3/Portfolio"
      />

      <ProjectContainer
        title="Bank Teller"
        description="This project was created using C++ and it's purpose was to mimic the transactions a bank teller would have to do
        for a customer such as withdraws, deposits, apply fees, check balances, etc. The code has comments starting with a
        number, those comments signify a vulnerability and how it was mitigated or prevented. This program was writen in Google Cloud Shell so it used a Linux developement enviroment. The program would require the user to sign on with a password which is password for simplicity. Each time there was a transaction, new directories would be created for deposits, withdraws and fees if they did not already exist and files would be created or appended inside them. Account numbers would also be cryptographically generated and checked to make sure no two same accounts existed for more information check out the README.md on Github."
        githubUrl="https://github.com/1Pete3/Bank-Teller"
      />
      <ProjectContainer
        title="PromlyApp"
        description="Promly combines mental health experts and an entrepreneurial Gen Z team aiming to provide a support system that connects individuals from all over world between the ages of 13 - 19 years old based on similar interests. Promly promotes productivity and positive mental health by having built in resources for those who may lack motivation or are struggling with depression. These resources are completely free and built in the app to help mitigate teen suicide rates and help build connections. The objective of this project was to work with a group of three other students to create an Android Application based off of a Figma file for the IOS version of the app. Our team followed agile practices over the course of a semester. To see my contributions for this project checkout the different branches in GitHub."
        githubUrl="https://github.com/shanec1225/PromlyApp/tree/1by2day"
      />
      <ProjectContainer
        title="Travel Journal"
        description="This project was created using React and styling using Bootstrap. It features various places that I have visted. This was just a practice project for me to get familiar with React and the data comes from the data.js file. Feel free to mess around
        with it by modifying the files. Different files can be accessed by
        clicking on the items in the left navbar. This project can also be opened in code sandbox by
        pressing the icon in the bottom right corner of the project."
        githubUrl="https://github.com/1Pete3/Travel-Journal"
      />

      <TravelJournal />
    </div>
  );
};
export default Projects;
