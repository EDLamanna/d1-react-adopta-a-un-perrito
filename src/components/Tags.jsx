import Badge from "react-bootstrap/Button";

const Tags = ({ variantBadge, textButton }) => {
  return (
    <>
      <Badge className="etiqueta" variant={variantBadge}>
        {textButton}
      </Badge>
    </>
  );
};

export default Tags;
