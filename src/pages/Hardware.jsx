import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Hardware() {
  return (
    <>
    <Header titulo="Hardware" />
    <div className="container-hardware">

        <h1>O que é um Hardware? Hardware é um conjunto de componentes físicos que compõem um sistema computacional. No contexto de uma estação meteorológica, o hardware é responsável por coletar, processar e transmitir dados ambientais.</h1>
        
        <div className="Lado-a-lado">
        <p>LEDs são componentes eletrônicos que emitem luz quando uma corrente elétrica passa por eles. No projeto da estação, os LEDs atuam como indicadores.</p>
        <img src="/public/Imagem LEDS.avif" alt="img" className="Leds"/>
        </div>

        <div className="Lado-a-lado">
        <img src="/public/imagem sensor DHT 11.jpg" alt="img" className="DHT11"/>
        <p>Sensor DHT11 é um sensor de temperatura e umidade, amplamente utilizado em projetos de automação e monitoramento ambiental.</p>
        </div>

        <div className="Lado-a-lado">
        <p>Sensor MQ135 é um sensor de gás, utilizado para detectar a presença de gases como o benzeno, álcool e fumaça.</p>
        <img src="/public/Imagem sensor NQ135.jpg" alt="img" className="MQ135"/>
        </div>

        <div className="Lado-a-lado">
        <img src="/public/Imagem esp32.webp" alt="img" className="ESP32"/>
        <p>Esp32 é um microcontrolador com conectividade Wi-Fi e Bluetooth, amplamente utilizado em projetos de IoT.</p>
        </div>

        <div className="Lado-a-lado">
        <p>Resistores são componentes eletrônicos que limitam a corrente elétrica em um circuito. Eles são utilizados para proteger outros componentes e ajustar níveis de sinal.</p>
        <img src="/public/Resistores.jpg" alt="img" className="Resistores"/>
        </div>

        <div className="Lado-a-lado">
        <img src="/public/Imagem jumpers macho-macho.webp" alt="img" className="JumpersMachoMacho"/>
        <p>Jumpers macho-macho são fios utilizados para conectar componentes em uma protoboard ou circuito, realizando conexões entre pinos do mesmo tipo.</p>
        </div>

        <div className="Lado-a-lado">
        <p>Jumpers macho-fêmea tem a mesma finalidade dos macho-macho, mas permitem conexões entre diferentes tipos de pinos.</p>
        <img src="/public/Macho-Femea.webp" alt="img" className="JumpersMachoFemea"/>
        </div>

        <div className="Lado-a-lado">
        <img src="/public/Imagem breadboard.jpg" alt="img" className="Breadboard"/>
        <p>Breadboard é uma placa utilizada para prototipagem de circuitos eletrônicos, permitindo a conexão fácil de componentes sem a necessidade de soldagem, facilitando e melhorando a organização da montagem.</p>
        </div>
    </div>
      <Footer />
    </>
  );
}

export default Hardware; 

