import React from "react";

function ListaCinema() {
  const Filmes = [
    { id: 1, filme: "O Rei do Show" },
    { id: 2, filme: "Esposa de Mentirinha" },
    { id: 3, filme: "Mostros SA" },
    { id: 4, filme: "Oito Mulheres e Um Segredo" },
    { id: 5, filme: "Bottons" },
  ];
  return (
    <>
      <h2>Best movies in my opinion</h2>
      <ul>
        {Filmes.map((filme) => (
          <li key={filme.id}> {filme.filme} </li>
        ))}
      </ul>
    </>
  );
}

export default ListaCinema;
