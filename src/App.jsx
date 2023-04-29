import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
// console.log(data); // j'ai ma data

const App = () => {
  const [movieData, setMovieData] = useState(false);

  return (
    <main>
      <section>
        {data.map((elemMovies) => {
          return (
            <div>
              {movieData === false ? (
                <button
                  key={elemMovies.id}
                  onClick={() => {
                    setMovieData();
                    // console.log(elemMovies.name);
                  }}
                >
                  {elemMovies.name}
                </button>
              ) : (
                <div key={elemMovies.id}>
                  {elemMovies.actors.map((movies) => {
                    console.log(movies.name);
                    console.log(movies.picture);
                    return (
                      <div>
                        <h3>{movies.name}</h3>
                        <img src={movies.picture} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>
      <p> Merci de choisir un film !</p>
    </main>
  );
};

export default App;
