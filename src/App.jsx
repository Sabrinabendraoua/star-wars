import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
console.log(data); // j'ai ma data

const App = () => {
  const [movieData, setMovieData] = useState(false);

  const handleClick = () => {
    setMovieData(true);
  };

  return (
    <main className="background-img">
      <section>
        {data.map((elemMovies) => {
          return (
            <>
              <button
                key={elemMovies.id}
                onClick={() => {
                  console.log(elemMovies.name);
                }}
              >
                {elemMovies.name}
              </button>
              <div>
                {elemMovies.actors.map((movies) => {
                  return (
                    <>
                      <div>
                        <img src={movies.picture} />
                        <h3>{movies.name}</h3>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </section>
      <p> Merci de choisir un film !</p>
    </main>
  );
};

export default App;
