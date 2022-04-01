import { useState } from "react"

const pokemons = [
  'Eevee',
  'Pikachu',
  'Bulbasaur',
  'Charmander',
  'Squirtle',
  'Pidgey',
  'Rattata',
  'Meowth',
  'Psyduck',
  'Snorlax'
];

export default function CaughtPokemon ({date}) {
    const [caught, setCaught] = useState([])
    const setCaughtHandler = () => setCaught(caught.concat(pokemons[Math.floor(Math.random() * pokemons.length)]));
    return (
      <>
        <p>Caught {caught.length} pokemon on {date}</p>
        <button onClick={setCaughtHandler}>Catch Pokemon</button>
        <ul>
          {caught.map((pokemon, i) => <li key={i}>{pokemon}</li>)}
        </ul>
      </>
    )
}