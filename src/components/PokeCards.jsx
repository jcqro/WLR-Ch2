import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

const PokeCards = () => {
  return (
    <div>
      {mockPokemonsData
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((mockPokemon) => (
          <section>
            <h1>{mockPokemon.name} </h1>
            <img
              alt={mockPokemon.name}
              src={mockPokemon.sprites.back_default}
              onMouseOver={(e) =>
                e.currentTarget.src === mockPokemon.sprites.back_default
                  ? (e.currentTarget.src = mockPokemon.sprites.back_shiny)
                  : (e.currentTarget.src = mockPokemon.sprites.back_default)
              }
              onClick={() =>
                window.open(
                  mockPokemon.videoLink,
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              }
            ></img>
          </section>
        ))}
    </div>
  );
};

export default PokeCards;
