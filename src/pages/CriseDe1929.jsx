import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function CriseDe1929() {
  return (
    <>
      <Header titulo="Crise de 1929" />
      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Grande depressão" />
        </div>

        <div className="secao-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/q8Kg1exQzIU?si=2RARttAkz_L3a_Ao"
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
            texto="Os antecedentes foram o crescimento econômico dos Estados Unidos depois da Primeira Guerra Mundial, foi marcado por industrialização acelerada, consumo em massa e especulação financeira. Muitas pessoas investiam na bolsa com dinheiro emprestado e ao mesmo tempo havia uma superprodução agrícola e industrial sem aumento proporcional na demanda, o que levou à queda dos preços e ao acúmulo dos estoques. A falta de regulação no sistema financeiro também contribuiu para tornar a economia vulnerável."
            imagem="https://mises.org.br/arquivo/2286/2594.png"
          />
          <TextoDireita
            titulo="Desenvolvimento"
            texto="O desenvolvimento da crise começou em 24 de outubro de 1929, na quinta-feira negra (black thursday), quando aconteceu a quebra da bolsa de valores de Nova York (colapso repentino e catastrófico do mercado acionista americano, que criou a Grande Depressão).

Milhões de ações foram vendidas em pânico, causando a falência dos bancos, fechamento de empresas e aumento do desemprego.A crise se espalhou rapidamente para outros países, afetando o comércio internacional e diversas economias ao redor do mundo."
            imagem="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqsJYbP1LhVhq8e-VaPBDcjabyqFmD1TIVP2GUPJus2UX_-PmdQoRxVqR6xIjUJoc6542TBekdC6JOAZPjqSm-xIJyTqNzaA1HlcdDgDvCv0lztLLDoycQUgQWBrwKoW9PlHk8dTfK92VN/s1600/Dolar.jpg"
          />
          <TextoEsquerda
            titulo="Desfecho"
            texto="Começou com a posse de Franklin D. Roosevelt em 1933, que lançou o New Deal (um conjunto de medidas para reativar a economia americana). Entre elas tinham investimentos em obras públicas, reformas bancárias, apoio à agricultura e proteção ao trabalhador. A recuperação econômica, no entanto, só se firmou com a Segunda Guerra Mundial que deu impulso à indústria e ao emprego."
            imagem="https://einvestidor.estadao.com.br/wp-content/uploads/2020/04/grande-depressao_100420201846.jpg"
          />
          <TextoDireita
            titulo="Consequências"
            texto="As consequências da crise foram fortes, milhões de pessoas ficaram desempregadas e pobres, o liberalismo econômico perdeu a força e cresceu a ideia de que o Estado deve intervir na economia. A crise também estimulou o surgimento de regimes autoritários em alguns países e levou à criação de novas leis e instituições para evitar colapsos semelhantes no futuro."
            imagem="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/desempregados-crise-de-1929.jpg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default CriseDe1929;
