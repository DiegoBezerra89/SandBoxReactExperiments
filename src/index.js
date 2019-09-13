import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//JOGO DO CHUTE
//maquina precisa acertar um numero entre 0 e 300
//qtos palpites a maquina deu
//armazenar o estado do jogo: entrada, rodando ou fim
function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Você acertou, o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Recomeçar o jogo!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu palpite é {palpite}?</p>
      {/* <p>
        min: {min} | máx: {max}
      </p> */}
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
