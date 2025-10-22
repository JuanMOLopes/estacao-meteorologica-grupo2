import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projeto from "./pages/Projeto";
import SimulacaoWokwi from "./pages/SimulacaoWokwi";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import PerguntasERespostas from "./pages/PerguntasERespostas";
import Resultados from "./pages/Resultados";
import Grupo from "./pages/Grupo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-projeto" element={<Projeto />} />
          <Route path="/simulacao-wokwi" element={<SimulacaoWokwi />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/perguntas-e-respostas" element={<PerguntasERespostas />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/grupo" element={<Grupo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
