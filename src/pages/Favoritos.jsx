import { useState } from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Favoritos() {
  const [favoritos, setFavoritos] = useState(() => {
    // pega a lista de favoritos do localStorage, se não existir, inicia como uma lista vazia
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  return (
    <>
      <Header titulo="Favoritos" />

      <div className="favoritos">
        {/* mapeia a lista de favoritos */}
        {favoritos.map(
          (favorito) =>
            // para cada item, verifica se o número de curtidas dele é maior que 0, se for, exibe o item, se não, não exibe o item
            // nome do &&: curto circuito
            favorito.curtidas > 0 && (
              <div>
                <h2>{favorito.titulo}</h2>
                <p>{favorito.texto}</p>
                <img src={favorito.imagem} alt="" />
                <p>Curtidas: {favorito.curtidas}</p>
              </div>
            )
        )}
      </div>

      <Footer />
    </>
  );
}
export default Favoritos;
