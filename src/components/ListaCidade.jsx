import React from "react";

function ListaCidade() {
  const Cidades = [
    { id: 1, cidade: "Goiana" },
    { id: 2, cidade: "Santa Cataria" },
    { id: 3, cidade: "Sao Paulo" },
    { id: 4, cidade: "Rio de Janeiro" },
  ];
  return (
    <>
      <h2>What is your favorite city?</h2>
      <ul>
        {Cidades.map((city) => (
          <li key={city.id}> {city.cidade} </li>
        ))}
      </ul>
    </>
  );
}

export default ListaCidade;
