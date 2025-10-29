import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header titulo="Estação meteorológica" />
      <div className="container-home">
        <h1>Objetivo do Projeto:</h1>

        <div className="Lado-a-lado">
          <p>
            Desenvolver um dispositivo meteorológico compacto, empregando
            exclusivamente um microcontrolador ESP32 para realizar a coleta de
            dados de sensores de temperatura e umidade (DHT11, com alimentação
            de 3V) e de qualidade do ar (MQ-135, operando também a 3V). O
            sistema deve ainda gerenciar indicadores luminosos (LEDs) para
            sinalização de status e alerta, e transmitir os dados adquiridos
            para um servidor Mosquitto por meio de conexão Wi-Fi. Essa
            informação será acessível e visualizada em um dispositivo móvel que
            possua um cliente MQTT instalado. Este projeto visa aplicar e
            consolidar os fundamentos teóricos da disciplina de Internet das
            Coisas (IoT).
          </p>
          <img src="/home-projeto1.png" alt="img" className="img-home" />
        </div>

        <h1>Integração Multidisciplinar:</h1>

        <p>
          Para o projeto da estação meteorológica compacta foi necessária
          Integração Multidisciplinar, pois exige a convergência de diversas
          áreas do conhecimento para sua concretização. A eficácia do sistema
          depende da aplicação de princípios de Sistemas Operacionais,
          essenciais para gerenciar os recursos limitados do ESP32, e de
          Arquitetura de Redes e IoT, cruciais para estabelecer a comunicação
          Wi-Fi e a correta publicação de dados no servidor Mosquitto (MQTT).
          Além disso, a funcionalidade do sistema é construída sobre uma base
          sólida de Lógica de Programação e Algoritmos, que governam a leitura
          dos sensores, o processamento dos dados e o controle dos LEDs.
          Finalmente, a etapa de Levantamento de Requisitos e IoT garante que as
          necessidades do usuário sejam traduzidas em especificações técnicas
          precisas, unindo teoria e prática para criar uma solução de Internet
          das Coisas completa e funcional.
        </p>

        <img src="/home-projeto2.png" alt="img" className="img-home" />

        <h1>Diagrama:</h1>

        <p>
          Este diagrama ilustra o processo de comunicação entre os componentes do sistema IoT, desde a coleta dos dados até sua visualização final. O sensor DHT22 envia os sinais ao ESP32, que converte as informações em mensagens MQTT e publica via Wi-Fi. O Broker atua como mediador, repassando as mensagens aos clientes inscritos, que por fim recebem, interpretam e exibem os dados em tempo real.
        </p>

        <img src="/diagrama.png" alt="img" className="diagram-home" />
      </div>

      <Footer />
    </>
  );
}

export default Home;
