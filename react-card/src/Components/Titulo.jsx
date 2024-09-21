
import './Titulo.css'; 

// eslint-disable-next-line react/prop-types
const Titulo = ({ text }) => {
  return (
    <div className="title-container">
      <h1 className="animated-title">{text}</h1>
      <div className="underline"></div>
    </div>
  );
};

export default Titulo;
