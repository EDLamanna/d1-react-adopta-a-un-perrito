import MyCard from "./MyCard";

const Seccion = () => {
  return (
    <div className="container">
      <div className="row">
        <MyCard
          imagen="./src/assets/img/dogs001.jpg"
          Titulo="Pulguita"
          Descripcion="Llena de energía y lista para jugar. ¡Dale a Pulguita el hogar amoroso que se merece!"
          variantButton="success"
          textButton="Mini Toy"
        />
      </div>
      <div className="row">
        <MyCard
          imagen="./src/assets/img/dogs002.jpg"
          Titulo="Luna"
          Descripcion="Es juguetona, amigable y se lleva bien con niños y otros animales. ¡Haz de Luna parte de tu familia hoy mismo!"
          variantButton="info"
          textButton="Spitz Aleman"
        />
      </div>
      <div className="row">
        <MyCard
          imagen="./src/assets/img/dogs003.jpg"
          Titulo="Tomasito"
          Descripcion="Un perro de buen tamaño, y de un gran corazón. ¡Hazte amigo de Tomasito y experimenta un amor incondicional!"
          variantButton="danger"
          textButton="Dogo de Burdeos"
        />
      </div>
      <div className="row">
        <MyCard
          imagen="./src/assets/img/dogs004.jpg"
          Titulo="Oreo"
          Descripcion="Es un acompañante leal y cariñoso, ¡Ayudalo a encontrar su final feliz!"
          variantButton="warning"
          textButton="Teckel"
        />
      </div>
    </div>
  );
};

export default Seccion;
