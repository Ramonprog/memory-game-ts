import * as C from "./App.styles";
import InfoItem from "./components/IndoItem";

const App = () => {
  return (
    <C.Container>
      <div className="info">
        <div className="logo">
          <a href="">
            <h1>
              Dev<span>Memory</span>
            </h1>
          </a>
        </div>
        <div className="info-area">
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </div>

        <button>Reiniciar</button>
      </div>
      <div className="grid-area"></div>
    </C.Container>
  );
};

export default App;
