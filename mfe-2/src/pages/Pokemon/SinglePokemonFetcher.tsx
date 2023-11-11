import { FunctionComponent, useEffect, useState } from "react";

import { Card } from "@poc/components";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface SinglePokemonFetcherProps {
  url: string;
}

const SinglePokemonFetcher: FunctionComponent<SinglePokemonFetcherProps> = ({
  url,
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setPokemonData(result);
    };

    fetchPokemon().catch(console.error);
  }, [url]);

  if (!pokemonData) {
    return null;
  }

  const { name, sprites } = pokemonData;

  return (
    <Card
      imgSrc={sprites.front_default}
      imgAlt={name}
      title={<span className="text-capitalize">{name}</span>}
    />
  );
};

export default SinglePokemonFetcher;
