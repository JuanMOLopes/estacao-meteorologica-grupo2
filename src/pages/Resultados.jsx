import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function EstacaoMeteorologica() {
  return (
    <>
      <Header titulo="Estação meteorológica" />

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
          <iframe
            width="80%"
            height="400"
            src="https://www.youtube.com/embed/ttMMZL5cnOI?si=0fhoyr9fWcqjkOok"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h2 style={{ marginTop: "40px" }}>Imagens do projeto</h2>
        <div className="galeria">
          <img src="/Projeto01.png" alt="Imagem 1" />
          <img src="/Projeto02.png" alt="Imagem 2" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EstacaoMeteorologica;