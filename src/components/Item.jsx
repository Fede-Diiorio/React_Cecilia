import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ id, titulo, imagen, precio, stock, descripcion, categoria }) => {
  console.log(stock);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>{categoria}</Card.Text>
        {precio && <Card.Text>${precio}</Card.Text>}
        {stock && <Card.Text>Stock: {stock}</Card.Text>}
        <Link to={`/item/${id}`}>
          <Button variant="primary">Conocé Más!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

