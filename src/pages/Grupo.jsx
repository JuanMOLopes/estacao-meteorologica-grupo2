import "../App.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GrupoImg from "/Grupo2Foto.jpeg";
import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";

function Grupo() {
  return (
    <>
      <Header titulo="Grupo 2" />
        <img className="Grupo" src={GrupoImg} alt="Grupo 2" />

        <div className="Container-grp2">
      <p>
        Nós do grupo 2 escrevemos esta mensagem como forma de agradecimento aos professores Antônio e Leandro por esta atividade que foi proposta. Durante o processo de criação do site, diversos pontos do grupo foram melhorados, tendo como mais importante o trabalho em equipe. Essa atividade foi de grande importância para nossa aprendizagem e estudo de conteúdos de desenvolvimento de sistemas.
      </p>
      <p>
        O grupo 2 reitera sua gratidão pelo trabalho proposto pelos profissionais do ensino, em prol de obtermos conhecimento. Gratos!
      </p>
      </div>

       <div className="secao-texto">
          <TextoEsquerda
            titulo="Feito por: Agatha"
            texto="-Páginas: O projeto e perguntas e respostas"

            imagem=" "
 />
            <TextoDireita
            titulo="Feito por: Ana"
            texto=" -Página: Resultados"
            imagem=""
          />

          <TextoEsquerda
            titulo="Feito por: Juan"
            texto="-Páginas: Home e Software"

            imagem=" "
 />
  <TextoDireita
            titulo="Feito por: Lucas"
            texto=" -Páginas: Simulação Wokwi e Hardware"
            imagem=""
          />

           <TextoEsquerda
            titulo="Feito por: Zayra"
            texto="-Página:Grupo 2 "

            imagem=" "
 />
         </div>
      <Footer />
    </>
  );
}
export default Grupo;