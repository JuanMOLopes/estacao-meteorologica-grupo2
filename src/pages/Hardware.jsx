import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";

function Hardware() {
  return (
    <>
      <Header titulo="Sobre o hardware" />
      <div className="container-hardware">
        <div className="secao-definicao-hardware">
          <h2>Definição</h2>
          <p>
            Segundo o dicionário Oxford Languages, hardware é um conjunto de
            componentes físicos que compõem um sistema computacional. No
            contexto de uma estação meteorológica, o hardware é responsável por
            coletar, processar e transmitir dados ambientais.
          </p>
        </div>

        <TextoEsquerda
          titulo="LEDs"
          texto="LEDs são componentes eletrônicos que emitem luz quando uma corrente elétrica passa por eles. No projeto da estação, os LEDs atuam como indicadores."
          imagem="/leds.png"
        />

        <TextoDireita
          titulo="Sensor DHT11"
          texto="Sensor DHT11 é um sensor de temperatura e umidade, amplamente utilizado em projetos de automação e monitoramento ambiental."
          imagem="/sensordht11.png"
        />

        <TextoEsquerda
          titulo="Sensor MQ135"
          texto="Sensor MQ135 é um sensor de gás, utilizado para detectar a presença de gases como o benzeno, álcool e fumaça."
          imagem="/sensormq135.png"
        />

        <TextoDireita
          titulo="ESP32"
          texto="Esp32 é um microcontrolador com conectividade Wi-Fi e Bluetooth, amplamente utilizado em projetos de IoT."
          imagem="/esp32.png"
        />

        <TextoEsquerda
          titulo="Resistores"
          texto="Resistores são componentes eletrônicos que limitam a corrente elétrica em um circuito. Eles são utilizados para proteger outros componentes e ajustar níveis de sinal."
          imagem="/resistores.png"
        />

        <TextoDireita
          titulo="Jumpers macho-macho"
          texto="Jumpers macho-macho são fios utilizados para conectar componentes em uma protoboard ou circuito, realizando conexões entre pinos do mesmo tipo."
          imagem="/macho-macho.png"
        />

        <TextoEsquerda
          titulo="Jumpers macho-fêmea"
          texto="Jumpers macho-fêmea tem a mesma finalidade dos macho-macho, mas permitem conexões entre diferentes tipos de pinos."
          imagem="/macho-femea.png"
        />

        <TextoDireita
          titulo="Breadboard"
          texto="Breadboard é uma placa utilizada para prototipagem de circuitos eletrônicos, permitindo a conexão fácil de componentes sem a necessidade de soldagem, facilitando e melhorando a organização da montagem."
          imagem="/breadboard.png"
        />
      </div>
      <Footer />
    </>
  );
}

export default Hardware;
