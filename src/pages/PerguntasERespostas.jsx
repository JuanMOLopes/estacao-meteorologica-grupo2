import FAQ from "../components/FAQ/FAQ";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function PerguntasERespostas() {

  const faq = [
  // Array de objetos que será usado para criar múltiplos componentes FAQ
  // Cada objeto contém uma pergunta e resposta que serão passadas como props
    {
       // Estas informações serão passadas como props.pergunta e props.resposta
      // para o componente FAQ, que as exibirá de forma interativa
      pergunta: "O que é o projeto 'Estação Meteorológica IoT'?",
      resposta:
        "É um sistema inteligente que usa um pequeno computador (ESP32) e sensores para medir coisas importantes do ambiente, como a temperatura, a umidade do ar e a qualidade do ar, e enviar esses dados pela internet para que você possa vê-los em tempo real no seu celular.",
    },
    {
      pergunta: "O que significa 'IoT'?",
      resposta:
        "IoT é a sigla em inglês para 'Internet das Coisas' (Internet of Things). Significa que objetos do dia a dia, como sensores, geladeiras ou lâmpadas, podem se conectar à internet para coletar e trocar dados, tornando-os 'inteligentes'.",
    },
    {
      pergunta:
        "Por que é importante monitorar a qualidade do ar e os outros dados?",
      resposta:
        "Monitorar a qualidade do ar (gases), temperatura e umidade ajuda a entender se o ambiente está saudável e confortável. Por exemplo, saber a qualidade do ar pode indicar a presença de poluentes, e saber a umidade ajuda a prevenir problemas respiratórios ou mofo.",
    },
    {
      pergunta:
        "Como a Internet das Coisas (IoT) resolve o problema de monitoramento?",
      resposta:
        "A IoT resolve isso permitindo o uso de sensores que coletam dados e os comunicam em tempo real pela rede. Dessa forma, você não precisa ir até o sensor para ler as informações; elas chegam diretamente ao seu celular.",
    },
    {
      pergunta: "O que é o ESP32?",
      resposta:
        "O ESP32 é um pequeno microcontrolador, um tipo de 'cérebro' eletrônico, que usamos neste projeto. Ele é especial porque já vem com Wi-Fi embutido, permitindo que ele se conecte à internet para enviar os dados dos sensores.",
    },
    {
      pergunta: "Quais sensores foram usados neste projeto?",
      resposta:
        "Usamos o sensor DHT11 para medir a temperatura e a umidade. Também usamos o sensor MQ-135 para medir a qualidade do ar, detectando gases.",
    },
    {
      pergunta: "Qual a função dos LEDs no projeto?",
      resposta:
        "Os LEDs servem como luzes de status e alerta. Eles podem indicar se o sistema está funcionando corretamente (status) ou mudar de cor para avisar se a qualidade do ar, por exemplo, atingiu um nível preocupante (alerta).",
    },
    {
      pergunta: "Como o ESP32 envia os dados para o meu celular?",
      resposta:
        "Ele usa um protocolo de comunicação chamado MQTT e um servidor central chamado Mosquitto Broker. É como se o ESP32 enviasse uma mensagem para a central (Mosquitto), e a central repassasse essa mensagem para o seu celular.",
    },
    {
      pergunta: "O que significa MQTT?",
      resposta:
        "MQTT significa Message Queuing Telemetry Transport. É um protocolo de comunicação feito para ser muito leve, usando poucos recursos de rede. Por isso, é ideal para dispositivos pequenos e simples da IoT.",
    },
    {
      pergunta: "Por que o MQTT é ideal para projetos de IoT?",
      resposta:
        "Ele é ideal porque é leve (mensagens pequenas para dispositivos com pouca memória), tem baixo consumo de energia (economiza bateria) e é eficiente em redes com conexão ruim ou intermitente.",
    },
    {
      pergunta: "O que é o modelo 'Publicar/Assinar' do MQTT?",
      resposta:
        "É a forma como o MQTT funciona. É diferente de um modelo tradicional. Nele, os dispositivos que enviam dados ('Publicadores') e os que recebem ('Assinantes') não se falam diretamente. Eles se comunicam através de um ponto central, o Broker.",
    },
    {
      pergunta: "Quem é o 'Publicador' no nosso projeto?",
      resposta:
        "O ESP32 é o Publicador. Ele coleta os dados dos sensores (temperatura, umidade, gases) e 'publica' essas informações para o Broker.",
    },
    {
      pergunta: "Quem é o 'Assinante' no nosso projeto?",
      resposta:
        "O aplicativo que roda no seu celular é o Assinante. Ele 'assina' o tópico de interesse e recebe as mensagens com os dados que o Broker envia.",
    },
    {
      pergunta: "O que é um 'Tópico' no MQTT?",
      resposta:
        "Um Tópico é como um 'endereço' ou uma 'categoria' para a mensagem. Por exemplo, o ESP32 publica os dados no tópico chamado 'estacao/dados'. Os clientes que querem receber esses dados precisam assinar esse mesmo tópico.",
    },
    {
      pergunta: "O que é o Mosquitto?",
      resposta:
        "O Mosquitto é o nosso Broker (Corretor) MQTT. Pense nele como o servidor central ou o 'carteiro' do sistema. Ele recebe as mensagens de quem publica e as retransmite para todos os clientes que assinaram aquele tópico.",
    },
    {
      pergunta: "Por que precisamos do Mosquitto?",
      resposta:
        "O Mosquitto é o intermediário que garante que as mensagens dos sensores cheguem ao seu celular. Ele gerencia o tráfego de mensagens, permitindo que os dispositivos conversem de forma eficiente sem precisar saber o endereço um do outro.",
    },
    {
      pergunta: "O Mosquitto é um programa leve?",
      resposta:
        "Sim, o Mosquitto é projetado para ser leve e eficiente, consumindo poucos recursos do computador onde está instalado. Ele pode rodar tranquilamente em segundo plano, até mesmo em um notebook comum.",
    },
    {
      pergunta: "Onde o Mosquitto está rodando neste projeto?",
      resposta:
        "O Mosquitto está rodando em um computador (notebook ou desktop) que está conectado na mesma rede Wi-Fi que o ESP32 e o celular.",
    },
    {
      pergunta: "Qual a relação entre Mosquitto e MQTT?",
      resposta:
        "O MQTT é a linguagem de comunicação, o conjunto de regras. O Mosquitto é o programa de computador (broker) que implementa e executa essas regras do MQTT. Eles trabalham juntos para fazer a comunicação acontecer.",
    },
    {
      pergunta: "O que é o Endereço IP do Mosquitto?",
      resposta:
        "É o endereço único (como um número de telefone) do computador onde o Mosquitto está rodando na sua rede local, como por exemplo, 192.168.1.100. O ESP32 e o celular precisam deste endereço para saber com qual Broker devem se conectar.",
    },
    {
      pergunta:
        "O que significa configurar o Mosquitto para 'permitir conexões anônimas'?",
      resposta:
        "Essa configuração foi feita para facilitar os testes iniciais na rede local. Ela permite que qualquer cliente (como o ESP32 ou o celular) se conecte ao Broker sem precisar de nome de usuário ou senha.",
    },
    {
      pergunta: "Como fazemos a prova de que o Mosquitto está funcionando?",
      resposta:
        "Fazemos um teste simples usando duas janelas de comando no computador do Mosquitto. Uma janela age como um 'Assinante' (esperando a mensagem) e a outra age como um 'Publicador' (enviando a mensagem). Se a mensagem enviada aparecer na janela do Assinante, significa que o Broker está recebendo e entregando as mensagens corretamente.",
    },
  ];

  return (
    <>
      <Header titulo="Perguntas e Respostas" />
      {/* Para cada objeto no array perguntas, cria um componente FAQ
          O componente FAQ receberá:
          - key: identificador único requerido pelo React
          - pergunta: será acessado no FAQ como props.pergunta
          - resposta: será acessado no FAQ como props.resposta 
          
          O FAQ então usará estas props para:
          1. Mostrar a pergunta em um botão
          2. Mostrar/ocultar a resposta quando o botão for clicado */}

      {faq.map((item, index) => (
        <FAQ
          key={index}
          pergunta={item.pergunta}
          resposta={item.resposta}
        />
      ))}

      <Footer />
    </>
  );
}

export default PerguntasERespostas;
