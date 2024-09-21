/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './Cat.css';

const Card = ({ lang, img, fcolor, scolor, description }) => {
  return (
    <div className="card"
      style={{
        background: `linear-gradient(to left, ${fcolor}, ${scolor})`
      }}>
        <img src={img} alt={`${lang} icon`} className="img" />
        <h3>{lang}</h3>
        <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
    description: PropTypes.string
};

export default Card;
