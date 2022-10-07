import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import './projects.css';
const { Octokit } = require('@octokit/core');
const LanguageColors = require('language-colors');

const ProjectContainer = (props) => {
  let string = props.title;

  const colors = (programmingLanguage) => {
    if (programmingLanguage === 'C++') {
      return 'color-cpp';
    } else if (programmingLanguage === 'HTML') {
      return 'color-html';
    } else if (programmingLanguage === 'CSS') {
      return 'color-css';
    } else if (programmingLanguage === 'JavaScript') {
      return 'color-javascript';
    } else if (programmingLanguage === 'Python') {
      return 'color-python';
    } else if (programmingLanguage === 'SCSS') {
      return 'color-scss';
    } else if (programmingLanguage === 'C#') {
      return 'color-csharp';
    } else {
      return 'text-primary';
    }
  };

  const [usedLanguage, setUsedLanguage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_KEY,
      });
      //console.log(string);
      if (string.includes(' ')) {
        string = props.title.split('');
        string.splice(string.indexOf(' '), 1, '-');

        string = string.join('');
      }

      const portfolioData = await octokit.request('GET /repos/{owner}/{repo}/languages', {
        owner: '1pete3',
        repo: `${string}`,
      });
      setUsedLanguage(Object.entries(portfolioData.data));
    };
    fetchData();
  }, []);
  console.log(usedLanguage[0]);
  let total = 0;
  for (let i = 0; i < usedLanguage.length; i++) {
    total += Number(usedLanguage[i][1]);
  }
  console.log('Total', total);

  const programmingLanguage = usedLanguage.map((x) => {
    let percentage = 0;
    percentage = ((100 * x[1]) / total).toFixed(1);
    return (
      <div key={x[1]}>
        <div className='githubStats'>
          <h5 className={colors(x[0])}>■</h5>
          <h5>
            {x[0]} - {percentage}%
          </h5>
        </div>
      </div>
    );
  });

  return (
    <Container fluid className="bg-secondary text-third text-center border-5 border border-dark">
      <Row>
        <Col className="bg-third text-fourth border-bottom border-5 border-dark">
          <h1>{props.title}</h1>
        </Col>
      </Row>
      <Row className="projectInfo">
        <Col className="border-5 border-dark border-end">
          <p>{props.description}</p>
        </Col>
        <Col className="projectGithub">
          {programmingLanguage}

          <Button
            variant="light"
            className="border border-dark border-2 mt-2 text-dark githubBtn"
            href={props.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ProjectContainer;
