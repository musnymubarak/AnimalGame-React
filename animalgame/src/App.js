import './App.css';
import { useState, useEffect } from 'react';
import { animals } from './data/AnimalsDb';  
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
      <div>
        <h1 className='heading'>ANIMAL MATCHING GAME</h1>
      </div>
      <div className="components-container">
        <div className="component">
          <Result result={result} />
        </div>
        <div className="component">
          <AnimalName name={displayedAnimal} />
        </div>
        <div className="component select-animal">
          <SelectAnimal onSelectAnimal={handleSelectAnimal} />
        </div>
      </div>
    </div>
  );
}

export default App;
