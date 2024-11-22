import '../Assets/Styles/AnimalName.css';

export default function AnimalName({name}){
    return(
        <div className="animal-name">
            <h2>Animal Name</h2>
            <h2 className="animal-name-text">{name.toUpperCase()}</h2>
        </div>
    )
}