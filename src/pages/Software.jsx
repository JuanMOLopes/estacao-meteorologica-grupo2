import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import codigoFonte from "./codigoFonte.ino?raw";

export default function Software() {
  return (
    <>
      <Header titulo="Sobre o software" />

      <div className="software">
        <div className="secao-definicao-software">
          <h2>Definição</h2>
          <p>
            Segundo o dicionário Oxford Languages, software é um conjunto de
            componentes lógicos de um computador ou sistema de processamento de
            dados, ou seja, um conjunto de instruções que controlam o
            funcionamento de um computador ou hardware.
          </p>
        </div>
        <div className="resumo-tecnico">
          <h2>Resumo técnico</h2>
          <ul>
            <li>
              <strong>Placa utilizada (Board):</strong> ESP32 Dev Module
            </li>
            <li>
              <strong>IDE:</strong> Arduino IDE 2.3.6
            </li>
            <li>
              <strong>Porta USB:</strong> COM5
            </li>
          </ul>

          <h2>Bibliotecas necessárias</h2>
          <ul>
            <li>DHT sensor library (Adafruit)</li>
            <li>Adafruit Unified Sensor</li>
            <li>PubSubClient (MQTT)</li>
          </ul>
        </div>

        <div className="secao-codigo-fonte">
          <h2>Código-fonte</h2>
          <div>
            <pre>
              <code>{codigoFonte}</code>
            </pre>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
