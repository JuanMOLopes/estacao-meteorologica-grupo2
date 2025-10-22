import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";


function Projeto() {
  return (
        <>
      <Header titulo="O Projeto" />

      <div className="conteudo">
       
        <div className="secao-texto">
          <TextoEsquerda
            titulo="O Problema"
            texto="Monitorar com precisão fatores como temperatura, umidade e a concentração de gases poluentes (qualidade do ar) é fundamental não apenas para o conforto, mas, principalmente, para a saúde e a segurança.Variações extremas de temperatura e umidade podem afetar a conservação de equipamentos, produtos e a integridade estrutural de ambientes. Mais crucialmente, a má qualidade do ar, resultante do acúmulo de gases nocivos ou da falta de ventilação, é um fator de risco direto, podendo causar problemas respiratórios e, em casos mais graves, intoxicações. Portanto, ter dados confiáveis e em tempo real sobre esses parâmetros é o primeiro passo para tomar decisões proativas e manter ambientes salubres e controlados.
            "
            imagem= "1000061208 (1).jpg"
           
          />
          <TextoDireita
            titulo="A Solução"
            texto="A Internet das Coisas (IoT) surge como a solução ideal para esse desafio de monitoramento. Por meio da integração de hardware e software, a IoT permite a instalação de sensores específicos (como o DHT11 e o MQ-135, no caso do projeto) que fazem a leitura automática dos parâmetros ambientais (temperatura, umidade e gases). O grande diferencial é a comunicação em tempo real: um microcontrolador (ESP32) coleta esses dados e os envia instantaneamente, via Wi-Fi, para uma plataforma central (servidor Mosquitto). Isso elimina a necessidade de checagens manuais e possibilita a visualização imediata em qualquer lugar (via cliente MQTT no celular), transformando a coleta de dados isolada em um sistema de vigilância contínuo e inteligente.
"
            imagem="1000061206.jpg"
          />
          
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Projeto;