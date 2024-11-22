import './App.css';
import { useState, useEffect } from 'react';
import { animals } from './data/AnimalsDb';  // Import the animals array
import AnimalName from './Components/AnimalName';
import SelectAnimal from './Components/SelectAnimal';
import Result from './Components/Result';

function App() {
  const [displayedAnimal, setDisplayedAnimal] = useState("");
  const [result, setResult] = useState("");  

  useEffect(() => {
    generateRandomAnimal(); 
  }, []);

  
  const generateRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setDisplayedAnimal(animals[randomIndex].name);
  };

  const handleSelectAnimal = (selectedAnimal) => {
    if (selectedAnimal === displayedAnimal) {
      setResult('win');
    } else {
      setResult('lose');
    }
  };

  return (
    <div className="App">
      <AnimalName name={displayedAnimal} />
      <SelectAnimal onSelectAnimal={handleSelectAnimal} />
      <Result result={result} />
    </div>
  );
}

export default App;
