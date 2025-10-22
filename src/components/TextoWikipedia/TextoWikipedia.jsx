import "./TextoWikipedia.css";
import { useState, useEffect } from "react";

function TextoWikipedia(props) {
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    // criamos uma função assíncrona (espera a função terminar enquanto o resto do código continua executando)
    async function fetchResumo() {
      // tentamos pegar o conteúdo da Wikipedia
      try {
        // tradução: await = esperar, fetch = buscar
        // await fetch significa que o código vai esperar a resposta da busca na URL antes de continuar
        // o fetch busca o conteúdo da URL
        // passamos o tema como props
        const resposta = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${props.tema}`
        );
        // se a resposta for diferente de ok (ruim), lança um erro
        // tradução: throw new Error = lançar novo erro
        // a resposta diferente de ok geralmente é quando o servidor respondeu, mas o conteúdo não foi encontrado
        if (!resposta.ok) {
          throw new Error("Conteúdo não encontrado");
        }

        // se a resposta for ok, convertemos a resposta em JSON
        const dados = await resposta.json();
        console.log(dados);

        // pegamos o conteúdo do resumo e colocamos no estado Conteudo
        setConteudo(dados.extract);

        //pegamos a url da imagem e colocamos no estado Imagem
        setImagem(dados.originalimage.source);
      } catch (erro) {
        // se o try der erro, pegamos o erro e colocamos no estado Erro
        // geralmente é quando esta sem internet
        setErro(erro.message);
      }
    }

    // chamamos a função fetchResumo
    fetchResumo();
  }, []);
  // o useEffect é executado apenas uma vez, quando a página é carregada

  // se der erro, mostramos a mensagem de erro
  if (erro) return <h2>Erro: {erro}</h2>;

  return (
    <div className="TextoWikipedia">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/640px-Wikipedia-logo-v2-en.svg.png"
        alt=""
      />
      <div className="conteudo-wikipedia">
        <p>{conteudo}</p>
        <img src={imagem} alt="" />
      </div>
    </div>
  );
}

export default TextoWikipedia;
