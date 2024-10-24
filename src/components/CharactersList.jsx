import { useState, useEffect } from "react";
import Character from "./Character";
import '../components/styles/list.css';

const Characters = ({ searchData }) => {
    const [mortyData, setMortyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch("https://rickandmortyapi.com/api/character");
            const { results } = await data.json();
            console.log(results);
            setMortyData(results);
            setLoading(false);
        }
        fetchData();
    }, []);

    // Search functionality
    const searchFilter = mortyData.filter((searchActor) =>
        searchActor.name.toLowerCase().includes(searchData.toLowerCase())
    );

    return (
        <div className="character-list">
            {loading ? (
                <div>Loading...</div>
            ) : (
                searchFilter.map((actor) => (
                    <Character
                        key={actor.id}
                        name={actor.name}
                        origin={actor.origin.name}
                        image={actor.image}
                    />
                ))
            )}
        </div>
    );
};

export default Characters;
