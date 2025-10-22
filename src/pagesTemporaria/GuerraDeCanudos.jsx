import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function GuerraDeCanudos() {
  return (
        <>
      <Header titulo="Guerra de Canudos" />

      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Guerra de Canudos" />
        </div>

        <div className="secao-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/69MTadaKjWk?si=wZQewr8OspI7M1p1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="secao-texto">
          <TextoEsquerda
            titulo="Antecedentes"
            texto="Canudos(1896-1897) teve sua origem a partir da pobreza e miséria do sertão nordestino, sendo um momento da história e da vida daqueles que viviam em canudos um período marcado por experiências subumanas. Houveram  longos períodos de seca e de fome extrema, o povo de Canudos foi também vítima do abandono do governo.
Em meio a este contexto, surgiu Antônio Conselheiro, um líder religioso que realizava pregações com pautas que iam contra as injustiças realizadas pelo governo que atingiam diretamente a sociedade de um pequeno povoado chamado Canudos, localizado na Bahia. O crescimento desta comunidade, de seu discurso contra a república e de fieis que acreditavam nas palavras de A.Conselheiro ganhou a atenção das autoridades, que a partir deste momento, começaram a considerá-los como uma nova ameaça."
            imagem="https://www.multirio.rj.gov.br/images/img_2016_10/Imagem_6_Canudos_village.jpg"
          />
          <TextoDireita
            titulo="Desenvolvimento"
            texto="Durante o período de conflito em Canudos, o Governo republicano realizou o envio de quatro expedições militares para destruir o Povoado. As três primeiras expedições foram derrotadas pela resistência sertaneja, que, mesmo sem armamentos o suficiente, já conheciam bem seu terreno, onde viviam e que estavam dispostos a defender ele e sua fé com unhas e dentes, mesmo que custasse a vida. Porém, na quarta expedição, maior, mais forte e numerosa, foi realizado o ataque incessante contra o arraial que resultou na destruição completa de Canudos.
"
            imagem="https://static.wixstatic.com/media/2a6663_9106d07f5ee642a4a947b66f98af9e7c~mv2.jpg/v1/fill/w_560,h_420,al_c,lg_1,q_80,enc_avif,quality_auto/2a6663_9106d07f5ee642a4a947b66f98af9e7c~mv2.jpg"
          />
          <TextoEsquerda
            titulo="Desfecho"
            texto='O fim deste conflito chegou em outubro de 1897 com a dominação e destruição total de Canudos. Neste ponto da história, Antônio Conselheiro já havia morrido antes da invasão final, em 22 de setembro de 1897, sendo a possível causa de sua morte uma disenteria recorrente de um jejum rigoroso e traumas obtidos durante o conflito. A repressão causada pelo governo foi brutal, praticamente todos os moradores foram mortos, incluindo mulheres, crianças e idosos, sendo eles inocentes que apenas estavam em meio ao fogo cruzado. Canudos foi um massacre.
'
            imagem="https://static.historiadomundo.com.br/conteudo/images/o-arraial-canudos-formado-no-interior-bahia-reuniu-milhares-individuos-5808d5bddbbb6.jpg"
          />
          <TextoDireita
            titulo="Consequências"
            texto="Canudos evidenciou a violência do Estado contra os mais pobres e também evidenciou a enorme distância entre o Brasil do litoral urbano e o sertão miserável. Este conflito foi responsável por deixar marcas profundas na história do Brasil e foi retratado em obras como “Os Sertões”, de Euclides da Cunha, como um símbolo entre civilização, miséria e barbaridade.
"
            imagem="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/guerra-canudos.jpg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default GuerraDeCanudos;
