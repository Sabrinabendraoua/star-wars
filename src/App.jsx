import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
// console.log(data); // j'ai ma data

const App = () => {
  const [movieData, setMovieData] = useState(false);

  return (
    <main className="background-img">
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
                <div>
                  {elemMovies.actors.map((movies, index) => {
                    console.log(movies.name);
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
