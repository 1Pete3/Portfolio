import skillsData from "./skillsData"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'
const Skills = (props) =>{

    return(
        <Card className='Skills'>
      <Card.Img  src={props.item.img} className='skillsLogo'/>
    </Card>
    )
}
export default Skills;