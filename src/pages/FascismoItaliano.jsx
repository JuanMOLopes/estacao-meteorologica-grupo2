import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function FascismoItaliano() {
  return (
    <>
      <Header titulo="Fascismo Italiano" />
      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Fascismo italiano" />
        </div>

        <div className="secao-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mRRQcTZ1vj0?si=_F4nvWNJmFgsMqYK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="secao-texto">
           {/* engloba as props */}
          <TextoEsquerda
          // o titulo é uma props
            titulo="Antecedentes"
            //o texto é uma props
            texto="O auge do totalitarismo ocorreu entre os anos 1920 e 1930, na Europa. Seu início está associado diretamente às consequências da Primeira Guerra Mundial. Após a Grande Guerra, crises políticas e econômicas afligiram diversas nações, em especial, as julgadas derrotadas no conflito. Além disso, a difusão do socialismo assustou a classe média europeia.

Nesta realidade conflituosa, contingentes massivos da população europeia foram convencidos a adotarem o totalitarismo ao invés da democracia."
//a imagem é uma props
            imagem="https://i.natgeofe.com/n/1cded6de-069c-4767-9a88-645cac0cc694/BAL_3077962_3x4.JPG"
        
          />
           {/* engloba as props */}
          <TextoDireita
          //// o titulo é uma props
            titulo="Desenvolvimento"
            //o texto é uma props
            texto="Após o fim da Primeira Guerra Mundial, a Itália enfrentava uma grave crise econômica, alta inflação, desemprego e um clima de instabilidade social. Nesse contexto, Benito Mussolini fundou, em 1919, o Partido Nacional Fascista (PNF), defendendo uma ideologia baseada no nacionalismo extremo — que pregava a superioridade da Itália —, no anticomunismo— com ódio declarado aos socialistas e sindicatos —, no autoritarismo — rejeitando a democracia liberal — e no expansionismo, visando recuperar territórios considerados historicamente italianos.

O movimento fascista logo se destacou pela violência. Seus militantes, conhecidos como Camisas Negras (ou squadristi), formavam milícias paramilitares que atacavam socialistas, sindicalistas e outros opositores. Recebendo apoio financeiro de empresários e grandes proprietários rurais, os fascistas passaram a se fortalecer politicamente.

O ponto decisivo dessa ascensão ocorreu em outubro de 1922, com a Marcha sobre Roma: milhares de Camisas Negras marcham em direção à capital italiana exigindo que o poder fosse entregue ao movimento. Temendo uma guerra civil, o rei Vitor Emanuel III se recusou a usar o exército contra os fascistas e acabou nomeando Benito Mussolini como primeiro-ministro. 

Uma vez nomeado primeiro-ministro, Benito Mussolini iniciou um processo gradual de destruição da democracia italiana, consolidando uma ditadura fascista. Entre 1925 e 1926, foram aprovadas as Leis Fascistíssimas, que proibiram partidos políticos, sindicatos livres e a liberdade de imprensa. Nesse mesmo período, foi criada a OVRA, a polícia secreta do regime, encarregada de perseguir, prender, exilar ou até assassinar opositores — como o socialista Giacomo Matteotti, morto em 1924 após denunciar fraudes nas eleições.

O regime também atuou no controle ideológico da sociedade. Mussolini passou a ser cultuado como o Duce (líder, condutor), tendo sua imagem difundida como símbolo de força e heroísmo nacional. Crianças e jovens eram doutrinados por meio da Juventude Fascista, enquanto os meios de comunicação eram rigidamente censurados e usados como instrumentos de propaganda, com forte presença do regime em rádios, cinemas e cartazes.

Na economia, Mussolini implantou o corporativismo, modelo no qual sindicatos e empresários eram subordinados ao Estado, eliminando conflitos trabalhistas. Buscando a autossuficiência, o regime adotou a autarquia, reduzindo importações e incentivando a produção nacional. Grandes obras públicas — como rodovias, edifícios e infraestrutura — foram realizadas para combater o desemprego e promover o progresso técnico do país.
"
//a imagem é uma props
            imagem="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/art535324.webp?w=380&h=570"
          />

  {/* engloba as props */}
          <TextoEsquerda
          // o titulo é uma props 
            titulo="Desfecho"
            // o texto é uma props 
            texto="O fascismo na Itália, liderado por Benito Mussolini, entrou em colapso em 1943. Depois de muitas derrotas militares e crescente descontentamento popular, o Grande Conselho Fascista votou pela destituição de Mussolini em 25 de julho daquele ano.
             Ele foi preso por ordem do rei Vítor Emanuel III, que nomeou Pietro Badoglio como primeiro-ministro para negociar a rendição com os Aliados.

Mussolini não ficou muito tempo preso, em setembro de 1943, forças especiais alemãs o resgataram e ele estabeleceu a República Social Italiana no norte do país, que era como estado-fantoche controlado por Adolf Hitler, mas com o avanço dos aliados e a pressão da resistência italiana, o regime se desfez rapidamente.

Em abril de 1945, enquanto tentava fugir para a Suíça, Mussolini foi capturado por guerrilheiros italianos e executado em 28 de abril e seu corpo foi exposto em Milão, marcando simbolicamente o fim do fascismo na Itália.
"
 // a imagem é uma props 
            imagem="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/bal_2967450.webp?w=760&h=523"
          />
        </div>
      </div>
      {/* Puxando o footer já pronto ele é um componente */}
      <Footer />
    </>
  );
}
export default FascismoItaliano;
