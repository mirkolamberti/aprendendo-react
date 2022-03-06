import logo from './logo.svg';
import './App.css';

// Componentes gerados por mim
import Menu from './components/Menu';
import HelloWorld from './components/HelloWorld'
import FrasePropriedades1 from './components/FrasePropriedade1';
import FrasePropriedades2 from './components/FrasePropriedade2';
import ListaFragment from './components/ListaFragment';
import PropriedadeTipos from './components/PropriedadeTipos';

function App() {
  return (
    <div className="App">
    <Menu />
      <header className="App-header">
        <div><HelloWorld /></div>
        <span><ListaFragment /></span>
        <span>
          <PropriedadeTipos nome="Mirko" idade={25} />
          <PropriedadeTipos nome="Francisco" idade={100}/>
          <PropriedadeTipos />
        </span>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <FrasePropriedades1 />
          <FrasePropriedades1 texto="Bom dia" />
        </div>
        <div>
          <FrasePropriedades2 />
          <FrasePropriedades2 texto="Bom dia" />
          <FrasePropriedades2 texto="Boa tarde" ponto="!" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
