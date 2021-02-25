import './App.css';
import Fire from './component/Fire';

function App() {
  const fires = Array(100).fill(<Fire />);
  return (
    <div className="App">
      {fires.map(fire => fire)}
    </div>
  );
}

export default App;
