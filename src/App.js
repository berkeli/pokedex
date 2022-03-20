import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const date = new Date().toLocaleDateString();
  return (
    <>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
