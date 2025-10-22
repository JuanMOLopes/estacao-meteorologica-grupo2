import "../App.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GrupoImg from "/Grupo2Foto.jpeg";

function Grupo() {
  return (
    <>
      <Header titulo="Grupo 2" />
        <img className="Grupo" src={GrupoImg} alt="Grupo 2" />

        <div className="Container-grp2">
      <p>
        Nós do grupo 2 escrevemos esta mensagem como forma de agradecimento aos professores Julia, Antônio e Leandro por esta atividade que foi proposta. Durante o processo de criação do site, diversos pontos do grupo foram melhorados, tendo como mais importante o trabalho em equipe. Essa atividade foi de grande importância para nossa aprendizagem e estudo tanto de conteúdos de desenvolvimento de sistemas, como também de história.
      </p>
      <p>
        O grupo 2 reitera sua gratidão pelo trabalho proposto pelos profissionais do ensino, em prol de obtermos conhecimento. Gratos!
      </p>
      </div>

      <Footer />
    </>
  );
}
export default Grupo;