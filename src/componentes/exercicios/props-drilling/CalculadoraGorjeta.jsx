/* Objetivo:
Criar uma aplicação que permita ao usuário inserir o valor de uma conta e a porcentagem de gorjeta desejada. 
O cálculo final da gorjeta e do total a pagar será feito e exibido em um componente mais profundo, 
utilizando props drilling para passar o valor e a porcentagem através dos componentes. */

import { useState } from "react";
import ContaInput from "./ContaInput";
import GorjetaInput from "./GorjetaInput";
import TotalDisplay from "./TotalDisplay";

const CalculadoraGorjeta = () => {
  const [conta, setConta] = useState(0);
  const [gorjetaPercentage, setGorjetaPercentage] = useState(0);

  const handleContaChange = (newconta) => {
    setConta(Number(newconta));
  };

  const handleGorjetaChange = (newGorjeta) => {
    setGorjetaPercentage(Number(newGorjeta));
  };

  return (
    <div>
      <h1>Calculadora de Gorjeta</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <ContaInput onContaChange={handleContaChange} />
        <GorjetaInput onGorjetaChange={handleGorjetaChange} />
      </div>
      <TotalDisplay conta={conta} gorjetaPercentage={gorjetaPercentage} />
    </div>
  );
};

export default CalculadoraGorjeta;
