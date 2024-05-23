import React, { useState, useEffect } from "react";
import "../assets/css/RandomPokemon.css";

const RandomPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRandomPokemon = async () => {
        setLoading(true);
        setError(null);
        try {
            const randomId = Math.floor(Math.random() * 1010) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch Pokémon");
            }
            const data = await response.json();
            setPokemon(data);
        } catch (err) {
            setError("Failed to fetch Pokémon");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    // if (loading) return <p className="name">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container-pokemon">
            {pokemon && (
                <>
                    <div className="box-pokemon">
                        <div>
                            <p className="title-pokemon">Pausa, un Random Pokemon para ti!</p>
                            <button className="btn-pokemon" onClick={fetchRandomPokemon}>
                                Genéralo
                            </button>
                        </div>

                        <div>
                            {" "}
                            <img className="img-pokemon" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                            <p className="name-pokemon">{pokemon.name}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RandomPokemon;
