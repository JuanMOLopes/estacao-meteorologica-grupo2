import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SimulacaoWokwi() {
  return (
    <>
      <Header titulo="Simulação Wokwi" />
      <div className="container-Simulacao">
        <iframe src="https://wokwi.com/projects/444885255178513409" height="550" width="1050" title="Simulação Wokwi"></iframe>

        <h1>Simulação digital Wokwi em estágios!</h1>

        <div className="Cima-Baixo">
          <div className="Lado-a-lado">
            <img src="/Wokwi1.png" alt="img" className="Wokwi1" />
            <img src="/Wokwi2.png" alt="img" className="Wokwi2" />
          </div>

          <div className="Lado-a-lado">
            <img src="/Wokwi3.png" alt="img" className="Wokwi3" />
            <img src="/Wokwi4.png" alt="img" className="Wokwi4" />
          </div>

          <img src="/Wokwi5.png" alt="img" className="Wokwi5" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SimulacaoWokwi;
