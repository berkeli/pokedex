import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const date = new Date().toLocaleDateString();
  const logWhenClicked = () => {
    console.log('Hello there!')
   }
  return (
    <>
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
