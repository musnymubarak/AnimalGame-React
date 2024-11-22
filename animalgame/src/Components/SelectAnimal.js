import React from 'react';
import { animals } from '../data/AnimalsDb'; // Import the animals data

export default function SelectAnimal({ onSelectAnimal }) {
  return (
    <div className="select-animal">
      <h2>Select the Animal</h2>
      <div className="animal-images">
        {animals.map((animal, index) => (
          <div key={index} className="animal-card" onClick={() => onSelectAnimal(animal.name)}>
            <img 
              src={require(`../Assets/img/${animal.img}`)} 
              alt={animal.name} 
              className="animal-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
