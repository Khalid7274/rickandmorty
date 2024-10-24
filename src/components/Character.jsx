import '../components/styles/char.css';

const Character = ({ name, origin, image }) => {
    return (
        <div className="char-details">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <h3>origin:{origin.name}</h3>
        </div>
    );
}

export default Character;
