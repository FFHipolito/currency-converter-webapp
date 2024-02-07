import "./converter-box.css";
import React, { useState, useEffect } from "react";

const AMOUNT_ERROR = "* Digite um valor";
const BASE_ERROR = "* Selecione uma moeda de origem";
const TARGET_ERROR = "* Selecione uma moeda para conversão";

function ConverterBox() {
  const [currencies, set_currencies] = useState([]);
  const [amount, set_amount] = useState("");
  const [baseCurrency, set_baseCurrency] = useState("base");
  const [targetCurrency, set_targetCurrency] = useState("target");
  const [conversionText, set_conversionText] = useState("");
  const [amountError, set_amountError] = useState("");
  const [baseError, set_baseError] = useState("");
  const [targetError, set_targetError] = useState("");

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const url = "https://open.er-api.com/v6/latest/USD";
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => data.rates);

        const currenciesMap = Object.entries(response).map((el) => {
          return {
            acr: el[0],
            rate: el[1],
          };
        });

        set_currencies(currenciesMap);
      } catch {
        // TODO error handler
      }
    }
    fetchCurrencies();
  }, []);

  function resetErrorMessages() {
    set_amountError("");
    set_baseError("");
    set_targetError("");
  }

  function convertCurrencies() {
    resetErrorMessages();
    let hasError;

    if (amount === "" || amount === "0") {
      set_amountError(AMOUNT_ERROR);
      hasError = true;
    }
    if (baseCurrency === "base") {
      set_baseError(BASE_ERROR);
      hasError = true;
    }
    if (targetCurrency === "target") {
      set_targetError(TARGET_ERROR);
      hasError = true;
    }

    if (hasError) return;

    const baseRate = currencies.find((el) => el.acr === baseCurrency).rate;
    const targetRate = currencies.find((el) => el.acr === targetCurrency).rate;

    const conversion = parseFloat(amount * (targetRate / baseRate)).toFixed(2);

    set_conversionText(`${targetCurrency} ${conversion}`);
  }

  function resetForm() {
    set_amount("");
    set_baseCurrency("base");
    set_targetCurrency("target");
    resetErrorMessages();
  }

  return (
    <div className="converter-box">
      <h2>Faça a sua conversão!</h2>
      <div className="form">
        {/* amount */}
        <button className="reset-form" onClick={resetForm}>
          Resetar
        </button>
        <div className="amount">
          <input
            type="number"
            name="amount"
            value={amount}
            max="999999999999"
            placeholder="Digite o valor"
            onChange={(e) => set_amount(e.target.value)}
          ></input>
          {amountError && <p className="error-message">{amountError}</p>}
        </div>
        {/* base currency */}
        <div className="base">
          <select
            name="base"
            value={baseCurrency}
            onChange={(e) => set_baseCurrency(e.target.value)}
          >
            <option key="base" value="base">
              Moeda origem
            </option>
            {currencies.map((el) => (
              <option key={el.id} value={el.acr} label={el.acr}></option>
            ))}
          </select>
          {baseError && <p className="error-message">{baseError}</p>}
        </div>
        {/* target currency */}
        <div className="target">
          <select
            name="target"
            value={targetCurrency}
            onChange={(e) => set_targetCurrency(e.target.value)}
          >
            <option key="target" value="target">
              Moeda conversão
            </option>
            {currencies.map((el) => (
              <option key={el.id} value={el.acr} label={el.acr}></option>
            ))}
          </select>
          {targetError && <p className="error-message">{targetError}</p>}
        </div>
        {/* button for conversion */}
        <button className="conversion-button" onClick={convertCurrencies}>
          Fazer Conversão
        </button>
      </div>
      {conversionText && (
        <p className="conversion">
          A conversão é de <span>{conversionText}</span>
        </p>
      )}
    </div>
  );
}

export default ConverterBox;
