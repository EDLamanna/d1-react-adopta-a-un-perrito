import Button from "react-bootstrap/Button";

const Tags = ({ variantButton, textButton }) => {
  return (
    <>
      <Button className="botones" variant={variantButton}>
        {textButton}
      </Button>
    </>
  );
};

export default Tags;
