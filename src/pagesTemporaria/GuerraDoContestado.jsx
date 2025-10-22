import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function GuerraDoContestado() {
  return (
    <>
      <Header titulo="Guerra do Contestado" />

      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Guerra do Contestado" />
        </div>

        <div className="secao-video">
          <iframe
              width="100%"
            height="500"
            src="https://www.youtube.com/embed/0YHkAIG3d7k?si=EToroo3VjUKnWx51"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="secao-texto">
          <TextoEsquerda
            titulo="Antecedentes"
            texto="No século XIX, as ferrovias começaram a ser construídas no país, favorecendo o comércio entre os estados e o escoamento dos produtos para a exportação. A construção atraía um grande índice de trabalhadores,
 que buscavam boas condições de vida.Mas, após a inauguração, os trabalhadores ficaram desempregados, provocando uma crise.

Após a proclamação da república, o Estado e a Igreja se separaram.
 Porém, o catolicismo era muito presente no interior do Brasil.Com isso, líderes messiânicos conseguiram juntar fieis. Os sertanejos foram adeptos desse discurso e aderiram ao modo de vida proposto por esses líderes, sendo capazes de se armar para defender as comunidades onde habitavam. A principal figura religiosa foi José Maria.
"
            imagem="https://static.mundoeducacao.uol.com.br/mundoeducacao/2024/02/aviacao-do-exercito-brasileiro-na-guerra-do-contestado.jpg
"
          />
          <TextoDireita
            titulo="Desenvolvimento"
            texto=" 
Os trabalhadores foram afastados das construções e acabaram perdendo suas terras, que foram cedidas à empresa Brazil Railway Company. Essa situação gerou grande indignação entre os trabalhadores, que, sob a liderança de José Maria, iniciaram um levante armado para contestar tal decisão — daí a origem do nome do conflito. José Maria declarou a comunidade onde vivia com seus seguidores como um governo independente e assumiu uma postura contrária à República.
Com a intensificação do conflito, o governo federal, em parceria com os estados envolvidos, enviou tropas fortemente armadas para enfrentar os rebeldes, mas inicialmente não obteve sucesso. Nos primeiros embates, José Maria foi morto, porém suas ideias continuaram a inspirar seus seguidores, que decidiram manter a resistência.Após diversas batalhas marcadas por violência e mortes, as forças federais conseguiram finalmente derrotar os adeptos de José Maria de Santo Agostinho.

"
            imagem="https://static.todamateria.com.br/upload/co/nt/contestadotropaexercito.jpg"
          />
          <TextoEsquerda
            titulo="Desfecho"
            texto="A Guerra do Contestado chegou ao fim em 1916, após anos de confrontos entre os sertanejos e as forças do governo. Com o apoio dos estados do Paraná e de Santa Catarina, o governo federal mobilizou forças militares, equipadas com armamento moderno, para sufocar a resistência. A superioridade militar das tropas oficiais acabou prevalecendo, e os últimos focos de resistência foram eliminados. O conflito terminou com milhares de mortos, a prisão dos rebeldes e o controle total do Estado.
"
            imagem="https://s1.static.brasilescola.uol.com.br/be/2021/09/guerra-contestado.jpg"
          />
          <TextoDireita
            titulo="Consequências"
            texto=" A principal consequência foi o acordo de fronteira assinado entre Paraná e Santa Catarina, mas antes da paz se estabelecer foram necessárias 20 mil mortes.
"
            imagem="https://www.tjpr.jus.br/image/image_gallery?uuid=2da41c4e-a4f1-4a42-93bb-c3c11d9784ba&groupId=397262&t=1336497986180"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default GuerraDoContestado;
