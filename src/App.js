import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Dolar, setUnidad] = useState(0);
  const [Euro, setDecena] = useState(0);
  const [Bitcoin, setCentena] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUnidad((total * tipo) / 1);
    setDecena((total * tipo) / 1.17);
    setCentena((total * tipo) / 46400.41);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Dolares: {Dolar}</p>
      <p>Euros: {Euro}</p>
      <p>Bitcoin: {Bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select className="select" onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolares</option>
        <option value={1.17}>Euros</option>
        <option value={46400.41}>Bitcoin</option>
      </select>
      <input className="input" onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
