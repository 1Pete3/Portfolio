import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import './projects.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
const { Octokit } = require('@octokit/core');

const ProjectContainer = (props) => {
  let string = props.title;

  console.log(window.screen.width)
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

  let total = 0;
  for (let i = 0; i < usedLanguage.length; i++) {
    total += Number(usedLanguage[i][1]);
  }


  const programmingLanguage = usedLanguage.map((x) => {
    let percentage = 0;
    percentage = ((100 * x[1]) / total).toFixed(1);
   
    return (
      <div key={x[1]}>
        <div>
          <h5>
            <span className={colors(x[0])}>■</span>
            {x[0]} - {percentage}%
          </h5>
        </div>
      </div>
    );
  });

  function StackedExample() {
    return (
      <ProgressBar className='my-2'>
        {test}
      </ProgressBar>
    );
  }

  const test = usedLanguage.map((y) => {
    let percentage = 0;
    percentage = ((100 * y[1]) / total).toFixed(1);

    return (
        <ProgressBar striped variant={colors(y[0])} animated now={percentage} key={y} label={`${percentage}%`} visuallyHidden />
    );
  });

  return (
    <Container fluid className="bg-secondary text-third border-5 border border-dark border-bottom-0 text-center">
      <Row>
        <Col className="bg-third text-fourth border-bottom border-5 border-dark text-center">
          <h1>{props.title}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="my-auto">
          <p>{props.description}</p>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} className="my-auto">
          {programmingLanguage}
        </Col>
      </Row>
      <Row className="bg-primary">
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            variant="light"
            className="border border-dark border-2 text-dark githubBtn my-2"
            href={props.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Col>
        <Col xs={{ order: 'first', span: 12 }} sm={{ order: 'last', span: 6 }} md={6} lg={6} className="my-auto ">
          {StackedExample()}
        </Col>
      </Row>
    </Container>
  );
};
export default ProjectContainer;
