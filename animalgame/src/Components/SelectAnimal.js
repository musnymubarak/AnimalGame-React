import { animals } from '../data/AnimalsDb';

export default function SelectAnimal() {
    return (
      <div className="select-animal">
        <h2>Select the Animal</h2>
        <div className="animal-images">
          {animals.map((animal, index) => (
            <div key={index} className="animal-card">
              <img 
                src={`../Assets/img/${animal.img}`}  
                alt={animal.name}  
                className="animal-img"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
