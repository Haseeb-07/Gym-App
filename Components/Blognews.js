import Card from 'react-bootstrap/Card';
import roman from'../roman.jpg'
import goldberg from '../goldberg.jpg'
import './Blognews.css'
function Blognews() {
  return (
    <>
    <div className='Card'>
    <Card style={{ width: '445px' , height:'555' }}>
      <Card.Img variant="top" src={roman} />
      <Card.Body>
        <Card.Title>Roman Reigns</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '445px' , height:'555'}}>
      <Card.Img variant="top" src={goldberg} />
      <Card.Body>
        <Card.Title>Gold Berg</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Blognews;