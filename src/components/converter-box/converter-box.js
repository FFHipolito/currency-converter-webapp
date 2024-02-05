import "./converter-box.css";

function ConverterBox() {
  return (
    <div className="converter-box">
      <h2>Faça a sua conversão</h2>
      <div className="form">
        <input
          type="number"
          name="amount"
          max="999999999999"
          placeholder="Digite o valor"
          required
        ></input>
        <select required>
          <option disabled selected>
            Moeda origem
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <select required>
          <option disabled selected>
            Moeda conversão
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <button>Fazer Conversão</button>
      </div>
    </div>
  );
}

export default ConverterBox;
