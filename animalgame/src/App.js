import './App.css';
import { useState, useEffect } from "react";
import { animals } from './data/AnimalsDb';
import AnimalName from './Components/AnimalName';
import SelectAnimal from './Components/SelectAnimal';

function App() {

  const [displayedAnimal, setDisplayedAnimal] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setDisplayedAnimal(animals[randomIndex].name);
  }, []);


  return (
    <>
      <div>
        <AnimalName name={displayedAnimal} />
        <SelectAnimal />
      </div>
    </>
  );
}

export default App;
