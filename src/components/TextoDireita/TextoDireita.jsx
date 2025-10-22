import "./TextoDireita.css";
import { useState, useEffect } from "react";

function TextoDireita(props) {
  const [favoritos, setFavoritos] = useState(() => {
    // pega a lista de favoritos do localStorage, se não existir, inicia como uma lista vazia
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  const [curtidas, setCurtidas] = useState(() => {
    // pega a lista de favoritos do localStorage, se não existir, cria uma lista vazia
    const listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // verifica na lista de favoritos onde o texto salvo é igual ao texto do props
    const conteudo = listaFavoritos.find(
      (listaFavoritos) => listaFavoritos.texto === props.texto
    );
    // se encontrar o conteudo na lista, retorna as curtidas, senão inicia como 0
    return conteudo ? conteudo.curtidas : 0;
  });

  useEffect(() => {
    // sempre que clicamos no botão de curtidas, pegamos novamente a lista de favoritos do localStorage para garantir que ela esteja atualizada
    const listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // cria um objeto com as informações do item clicado
    const novoItem = {
      titulo: props.titulo,
      texto: props.texto,
      imagem: props.imagem,
      curtidas: curtidas,
    };

    // encontra o index do item clicado na lista de favoritos
    const index = listaFavoritos.findIndex(
      (listaFavoritos) => listaFavoritos.texto === props.texto
    );
    console.log(index);

    let novaLista;
    // se o index for -1, significa que o item não existe na lista de favoritos
    if (index === -1) {
      // então copia a lista antiga e adiciona o novo item
      novaLista = [...listaFavoritos, novoItem];
    } else {
      // senão (se o index for diferente de -1) mapeia a lista antiga procurando o item que foi clicado (i === index)
      novaLista = listaFavoritos.map((listaFavoritos, i) =>
        // se o index for igual ao index do item clicado, atualiza as curtidas, senão mantém o item igual
        i === index ? { ...listaFavoritos, curtidas: curtidas } : listaFavoritos
      );
    }

    // atualiza o estado com a nova lista
    setFavoritos(novaLista);
    // salva a nova lista no localStorage
    localStorage.setItem("favoritos", JSON.stringify(novaLista));
  }, [curtidas]);
  // o use effect vai ser chamado sempre que o estado de curtidas mudar
  // o estado muda sempre que o botão de curtidas for clicado
  // porém, quando o componente for montado, o useEffect também vai ser chamado pq o estado de curtidas é inicializado com o valor do localStorage
  // isso faz com que todos os itens sejam salvos no local storage, mesmo que a curtida seja 0 (não clicado)
  // então clicar no botão apenas atualiza o valor da curtida dos itens já salvos

  return (
    <>
      <div className="container">
        <div className="container-texto-direita">
          <div className="imagem-esquerda">
            <img src={props.imagem} alt="" />
          </div>
          <div className="texto-direita">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
        </div>

        <div className="favoritar">
          {/* quando o botão for clicado, aumenta a curtida em 1 */}
          <button onClick={() => setCurtidas(curtidas + 1)}>👍</button>
          {/* se a curtida for maior que 0, diminui a curtida em 1 */}
          <button onClick={() => curtidas > 0 && setCurtidas(curtidas - 1)}>
            👎
          </button>
          <p>{curtidas}</p>
        </div>
      </div>
    </>
  );
}

export default TextoDireita;
