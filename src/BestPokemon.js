export default function BestPokemon ({ abilities }) {
    return (
        <div>
            <p>My favourite pokemon is Bulbasaur</p>
            <ul>
                {abilities.map((ability, i) =><li key={i}>{ability}</li>)}
            </ul>
        </div>
)}