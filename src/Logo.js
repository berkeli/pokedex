
export default function Logo ({ appName, logWhenClicked}) {
    return (
      <header>
        <div>
          <h1>Welcome to {appName}</h1>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokedex" onClick={logWhenClicked}></img>
        </div>  
      </header>
)}