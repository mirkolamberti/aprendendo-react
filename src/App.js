import logo from './logo.svg';
import './App.css';

// Componentes gerados por mim
import Menu from './components/00_Menu';
import HelloWorld from './components/00_HelloWorld'
import FrasePropriedades1 from './components/a05_FrasePropriedade1';
import FrasePropriedades2 from './components/a06_FrasePropriedade2';
import ListaFragment from './components/a07_ListaFragment';
import PropriedadeTipos from './components/a08_PropriedadeTipos';
import Evento1 from './components/a09_Evento1';
import Evento2 from './components/a09_Evento2';
import Evento2_State from './components/a10_Evento2_State';
import EventoRepassaProps from './components/a11_EventoRepassaProps';
import CounterState from './components/00_CounterState';
import RenderCondicional from './components/a12_RenderCondicional';
import RenderizarListas from './components/a13_RenderizarListas';

function App() {
  return (
    <div className="App">
    <Menu />
    <RenderCondicional />
      <header className="App-header">
        <div><HelloWorld /></div>
        <EventoRepassaProps />
        <CounterState startFrom={2} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <FrasePropriedades1 />
        <FrasePropriedades1 texto="Bom dia" />
      </div>
      <div>
        <FrasePropriedades2 />
        <FrasePropriedades2 texto="Bom dia" />
        <FrasePropriedades2 texto="Boa tarde" ponto="!" />
      </div>
      <p><Evento1 msg="Até mais!" /></p>
      <p>Evento2:</p>
      <Evento2 />
      <p>Evento 2 com State</p>
        <Evento2_State msg="form" />
        <span><ListaFragment /></span>
        <span>
          <PropriedadeTipos nome="Mirko" idade={25} />
          <PropriedadeTipos nome="Francisco" idade={100}/>
          <PropriedadeTipos />
        </span>
        <RenderizarListas />
    </div>
  );
}

export default App;
