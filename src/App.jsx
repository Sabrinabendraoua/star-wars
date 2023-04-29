import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
console.log(data); // j'ai ma data

{
  /*const [chooseMovie, setChooseMovie] = useState("");*/
}

const App = () => {
  return (
    <main className="background-img">
      <section>
        {data.map((elemMovies) => {
          return (
            <>
              <button
                key={elemMovies.id}
                onClick={() => {
                  elemMovies.name;
                  console.log(elemMovies.name);
                }}
              >
                {elemMovies.name}
              </button>
              <div>
                {elemMovies.actors.map((movies) => {
                  return (
                    <>
                      <img src="" alt="" />
                      <h3>{movies.name}</h3>
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
