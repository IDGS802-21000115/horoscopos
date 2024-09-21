import { useState } from 'react';
import Cards from './Components/Cards';
import './App.css';
import Titulo from './Components/Titulo';
import Fecha from './Components/Fecha'; // Importamos el nuevo componente Fecha

const App = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <div className="app-container">
      <Titulo text="Consulta tu Signo Zodiacal" />
      <Fecha 
        dateOfBirth={dateOfBirth} 
        setDateOfBirth={setDateOfBirth} 
        handleSubmit={handleSubmit} 
      />
      {showCard && dateOfBirth && <Cards dateOfBirth={dateOfBirth} />}
    </div>
  );
};

export default App;
