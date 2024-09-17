import { useState } from "react";
import './global.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
        />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
        />
      </div>
      <button onClick={calcularIMC} className="calcular-btn">
        Calcular IMC
      </button>
      {imc && (
        <div className="resultado">
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
