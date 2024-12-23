import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))
    return pokemons;
}

export default async function PokemonPage() {

    const pokemons = await getPokemons();
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
            <PokemonGrid pokemons={pokemons} />
            </div>
            {/* {JSON.stringify(pokemons)} */}
        </div>
    );
}