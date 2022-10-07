import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

const { Octokit } = require('@octokit/core');


const ProjectContainer = (props) => {
  let string = props.title;

  const gh = async () => {
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

    console.log(Object.keys(portfolioData.data));
    for(let i = 0; i < Object.keys(portfolioData.data).length;i++){
        //console.log(Object.keys(portfolioData.data)[i])
    }
    
    
  };
  gh(props.title)
  
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
