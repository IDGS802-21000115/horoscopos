
import './Fecha.css'; 

// eslint-disable-next-line react/prop-types
const Fecha = ({ dateOfBirth, setDateOfBirth, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="fecha-form">
      <input 
        type="date" 
        value={dateOfBirth || ''} 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        required 
        className="input-date"
      />
      <button type="submit" className="submit-btn">Consultar</button>
    </form>
  );
};

export default Fecha;
