import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function BankTeller() {
    return (
      <div className="bg-secondary text-third text-center border-5 border border-dark">
        <h1 className="bg-third text-fourth text-center border-bottom border-dark">Bank Teller</h1>
        <p>ravel
          This project was created using React, it features various places that I have visted. Feel free to mess around
          with it by modifying the files. Different files can be accessed by{' '}
          <strong>clicking on the items in the left navbar.</strong>This project can also be opened in code sandbox by
          pressing the icon in the bottom right corner of the project.
        </p>
        <Button variant="light" className='border border-dark border-2 mb-2 text-dark githubBtn' href='https://github.com/1Pete3/Travel-Journal' target='_blank' rel='noreferrer'> View on GitHub <FontAwesomeIcon icon={faGithub}/></Button>

      </div>
    );
  }