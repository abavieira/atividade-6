import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, dataNascimento, email, genero });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data de Nascimento: </label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Gênero: </label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
