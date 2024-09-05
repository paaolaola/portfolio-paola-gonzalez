import React, { useState, useEffect } from 'react';
import '../styles/RandomPokemon.css';

const RandomPokemon = () => {
    // Se inicializan los estados de pokemon, loading y error
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Se crea la función fetchRandomPokemon que se encarga de hacer la petición a la API de pokémon
    const fetchRandomPokemon = async () => {
        setLoading(true);
        setError(null);
        try {
            const randomId = Math.floor(Math.random() * 1010) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokémon');
            }
            const data = await response.json();
            setPokemon(data);
        } catch (err) {
            setError('Failed to fetch Pokémon');
        } finally {
            setLoading(false);
        }
    };
    // Se utiliza useEffect para que la función fetchRandomPokemon se ejecute una vez que el componente se haya montado
    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            {pokemon && (
                <>
                    <div className='box-pokemon'>
                        <div className='pokemon-items'>
                            <p className='title-pokemon'>Pausa, un Random Pokemon para ti!</p>
                            <button className='btn-pokemon' onClick={fetchRandomPokemon}>
                                Genéralo
                            </button>
                        </div>

                        <div>
                            <div className='img-pokemon-container'>
                                <img className='img-pokemon' src={pokemon.sprites.other['home'].front_default} alt={pokemon.name} loading="lazy" />
                            </div>
                            <p className='name-pokemon'>{pokemon.name}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RandomPokemon;
