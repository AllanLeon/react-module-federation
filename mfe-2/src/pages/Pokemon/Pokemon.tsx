import { FunctionComponent, useEffect, useState } from "react";

import SinglePokemonFetcher from "./SinglePokemonFetcher";

interface PokemonListItem {
  url: string;
  name: string;
}

// https://pokeapi.co/
const Pokemon: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = Math.floor(Math.random() * 1200);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
      );
      const result = await response.json();
      setPokemon(result.results);
    };

    fetchPokemon().catch(console.error);
  }, []);

  return (
    <section className="container">
      <h1>Pokemon</h1>
      <div className="row">
        {pokemon.map(({ url }, index) => (
          <div className="col-3 mb-3" key={index}>
            <SinglePokemonFetcher url={url}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pokemon;
