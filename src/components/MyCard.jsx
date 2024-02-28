import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ imagen, Titulo, Descripcion, variantButton, textButton }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>{Descripcion}</Card.Text>
          <div className="cardFooter">
            <Tags variantButton={variantButton} textButton={textButton} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
