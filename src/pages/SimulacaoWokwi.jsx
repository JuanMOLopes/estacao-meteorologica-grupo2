import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SimulacaoWokwi() {
  return (
    <>
    <Header titulo="Simulação Wokwi" />
    <div className="container-Simulacao">

        <h1>Simulação digital Wokwi em estágios!</h1>

    <div className="Cima-Baixo">

        <div className="Lado-a-lado">
        <img src="public/Wokwi1.png" alt="img" className="Wokwi1"/>
        <img src="public/Wokwi2.png" alt="img" className="Wokwi2"/>
        </div>

        <div className="Lado-a-lado">
        <img src="public/Wokwi3.png" alt="img" className="Wokwi3"/>
        <img src="public/Wokwi4.png" alt="img" className="Wokwi4"/>
        </div>

        <img src="public/Wokwi5.png" alt="img" className="Wokwi5"/>

    </div>

    </div>
      <Footer />
    </>
  );
}

export default SimulacaoWokwi; 

