import React from 'react';
import { animals } from '../data/AnimalsDb'; 
import '../Assets/Styles/SelectAnimal.css';

export default function SelectAnimal({ onSelectAnimal }) {
  return (
    <div className="select-animal">
      <h2>Select the Animal</h2>
      <div className="select-animal-grid">
        {animals.map((animal, index) => (
          <img 
            key={index} 
            src={require(`../Assets/img/${animal.img}`)} 
            alt={animal.name} 
            className="animal-img"
            onClick={() => onSelectAnimal(animal.name)} 
          />
        ))}
      </div>
    </div>
  );
}
