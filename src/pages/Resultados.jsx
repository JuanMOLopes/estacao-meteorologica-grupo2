import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function EstacaoMeteorologica() {
  return (
    <>
      <Header titulo="Estação meteorologica" />

      <div className="conteudo">
        <h2>Aprendizados do Projeto</h2>
        <p>
          Durante as etapas de desenvolvimento da estação meteorológica e de estudo sobre servidores Broker e clientes MQTT,
          adquirimos aprendizados e obtivemos experiências de grande importância, como a integração entre hardware e software,
          a comunicação pelo modelo Publish/Subscribe, a importância do Broker como intermediário, a compreensão do QoS, também
          sobre o entendimento prático da comunicação IoT, a configuração e envio de dados em tempo real, além da montagem física
          do circuito que realiza o papel de estação meteorológica utilizando o ESP32, sensores, protoboard e demais componentes.
          Essa vivência nos proporcionou uma visão mais ampla sobre automação, conectividade e aplicação prática dos conceitos de
          programação e eletrônica.
        </p>

        <h2>Teste com o sensor de gás</h2>
        <div className="video-container">
          <video controls>
            <source src="/video-teste-sensor.mp4" type="video/mp4" />
            Vídeo de demonstração
          </video>
        </div>

        <h2 style={{ marginTop: "40px" }}>Imagens do projeto</h2>
        <div className="galeria">
          <img src="/Projeto01.jpg" alt="Imagem 1" />
          <img src="/Projeto02.jpg" alt="Imagem 2" />
        </div>
      </div>

      <style>{`
        .conteudo {
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          color: #333;
          padding: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .conteudo h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #164a11ff;
        }

        .conteudo p {
          text-align: justify;
          font-size: 16px;
        }

        .video-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .video-container video {
          width: 80%;
          height: 400px;
          border-radius: 10px;
          background: #000;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }

        .galeria {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }

        .galeria img {
          width: 250px;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease-in-out;
        }

        .galeria img:hover {
          transform: scale(1.05);
        }
      `}</style>

      <Footer />
    </>
  );
}

export default EstacaoMeteorologica;