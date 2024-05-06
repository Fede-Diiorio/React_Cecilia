import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, img, price, stock, description, category }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>{category}</Card.Text>
      {price && <Card.Text>${price}</Card.Text>}
      {stock && <Card.Text>Stock: {stock}</Card.Text>}
      <Link to={`/item/${id}`}>
        <Button variant="primary">Conocé Más!</Button>
      </Link>
    </Card.Body>
  </Card>
);

