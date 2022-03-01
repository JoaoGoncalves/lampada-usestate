
import './App.css';
import LightbulbSvg from './components/LightbulbSvg';
import { useState } from 'react';

function App() {

  const [light, setLight] = useState(false);

  let fillColor = light ? 'gold' : 'gray';

  const handleLight = () => setLight(!light)

  return (
    <div className="App">
      <h1>A minha Alampada</h1>
     <section> 
      <LightbulbSvg fillColor={fillColor} />
     </section>
      <button onClick={handleLight}>On / Off</button>
    </div>
  );
}

export default App;
