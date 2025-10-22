import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function RevolucaoRussa() {
  return (
    <>
      <Header titulo="Revolução Russa" />

      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Revolução Russa" />
        </div>

        <div className="secao-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/XpxprM5lcm0?si=wcTKUVVFSHLeH07k"
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
            texto="A Rússia, no início do século XX, era um país profundamente atrasado em relação aos demais da Europa. Ainda mantinha uma estrutura social e econômica semelhante ao feudalismo, com 80% de sua economia baseada na agricultura. A maior parte da população vivia em extrema pobreza, enfrentando péssimas condições de vida, sem acesso adequado a saneamento, alimentação ou trabalho digno. Além disso, pagavam altos impostos para sustentar o regime czarista, comandado por Nicolau II.
Os czares eram figuras que exerciam poder absoluto sobre o Estado, semelhantes a reis, governavam sem qualquer tipo de Constituição que limitasse seus poderes. A dinastia Romanov, da qual Nicolau II fazia parte, já governava a Rússia havia mais de 300 anos.
Na tentativa de modernizar o país e alcançar as potências ocidentais, os czares antecedentes à revolução buscavam promover uma industrialização forçada, mas isso só aumentou a desigualdade e a insatisfação popular. Além disso, o governo gastava grande parte do orçamento público em guerras, como a Guerra Russo-Japonesa.
A insatisfação levou milhares de trabalhadores a se manifestarem em frente ao Palácio de Inverno, em São Petersburgo, no que pretendia ser um protesto pacífico. Eles buscavam entregar uma carta com reivindicações por melhores condições de trabalho, ainda mantendo o czar no poder. No entanto, a guarda real abriu fogo contra os manifestantes, matando centenas de pessoas. Esse episódio ficou conhecido como Domingo Sangrento e desencadeou uma onda de revoltas e protestos por todo o país.
Para conter o descontentamento popular, Nicolau II anunciou, em outubro do mesmo ano, as chamadas Leis Fundamentais, que funcionavam como uma espécie de Constituição, e criou a Duma, um parlamento nacional. No entanto, posteriormente a Duma foi dissolvida.
Com a chegada da Primeira Guerra Mundial em 1914, a situação piorou. O exército russo era mal preparado e mal equipado, o que levou a diversas derrotas. Grande parte dos recursos foi destinada ao esforço de guerra, causando uma grave crise de abastecimento, aumento da fome e da inflação. A miséria atingiu níveis alarmantes, levando a população a enxergar no comunismo - doutrina/ideologia política e econômica idealizada por Karl Marx e Friedrich Engels que defende o fim à luta de classes e igualdade social por meio do fim da propriedade privada e coletivização dos meios de produção - uma alternativa para a reconstrução do país."
            imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Red_army_in_moscow.jpg/640px-Red_army_in_moscow.jpg"
          />
          <TextoDireita
            titulo="Desenvolvimento"
            texto="Na Rússia, as ideias comunistas começaram a ganhar força através do POSDR (Partido Operário Social-Democrata Russo), liderado por Vladimir Lênin. No entanto, o partido acabou se dividindo em dois grupos por conta de divergências ideológicas:
Mencheviques
Eram a minoria;

Defendiam uma transição moderada: primeiro acabar com o czarismo, estabelecer uma república burguesa, desenvolver o capitalismo e, só depois, adotar o socialismo;

Rejeitavam a ideia de uma ditadura do proletariado.

Bolcheviques
Eram a maioria;

Defendiam a tomada imediata do poder pelos trabalhadores;

Propunham a implantação da ditadura do proletariado;

Contavam com o apoio dos camponeses e sovietes (conselhos operários).

Em fevereiro de 1917, a insatisfação popular e as derrotas na guerra levaram à queda do czar Nicolau II, em um evento conhecido como a Revolução de Fevereiro. A monarquia foi derrubada e instaurou-se um governo provisório, liderado principalmente por representantes da burguesia. No entanto, esse governo manteve a Rússia na guerra e ignorou as reivindicações populares.
Foi nesse contexto que Lênin retornou do exílio e lançou as Teses de Abril, com o slogan: “Paz, pão e terra” – prometendo retirar a Rússia da guerra, distribuir terras aos camponeses e garantir alimento ao povo. Além disso, exigia “todo o poder aos sovietes”, transferindo o controle político para os conselhos de trabalhadores.
Em outubro de 1917, os bolcheviques, liderados por Lênin, derrubaram o governo provisório na Revolução de Outubro, tomando o poder e estabelecendo um regime socialista.
Medidas de Lênin no Poder:
Tratado de Brest-Litovsk (1918): Retirou a Rússia da Primeira Guerra, mas cedeu territórios como Polônia, Ucrânia e Finlândia.
Comunismo de Guerra (1918-1921): Durante a Guerra Civil Russa, o governo confiscou alimentos e produção industrial para sustentar o Exército Vermelho, levando a fome e revoltas.
Nova Política Econômica (NEP - 1921): Para recuperar a economia, permitiu pequenas propriedades privadas e um limitado mercado livre, enquanto indústrias estratégicas permaneciam estatais.
Criação da URSS (1922): Unificou as repúblicas socialistas sob um único Estado, a União Soviética."
            imagem="https://www.sul21.com.br/wp-content/uploads/2017/02/20170226-lenin.jpg"
          />
          <TextoEsquerda
            titulo="Desfecho"
            texto='Com a morte de Lênin em 1924, iniciou-se uma disputa pelo poder entre Leon Trótski (que defendia a "revolução permanente", espalhando o socialismo pelo mundo) e Joseph Stalin (que preferia consolidar o "socialismo em um só país"). Stalin venceu, exilou Trótski (que foi assassinado em 1940) e estabeleceu um regime totalitário.
Stalinismo (1924-1953):
Planos Quinquenais: Metas industriais rígidas a cada cinco anos, priorizando aço, energia e armamentos.
Coletivização Forçada: Fim das propriedades privadas no campo, causando a Grande Fome na Ucrânia (Holodomor, 1932-33), que matou milhões.
Grande Expurgo (1936-1938): Perseguição política, execuções em massa e campos de trabalho forçado (Gulags) para eliminar opositores.
Culto à Personalidade: Propaganda massiva exaltando Stalin como líder supremo.'
            imagem="https://aventurasnahistoria.com.br/media/uploads/gettyimages-699913389.jpg"
          />
          <TextoDireita
            titulo="Consequências"
            texto="A Revolução Russa de 1917 derrubou o czarismo e levou à criação do primeiro Estado socialista do mundo, sob o controle autoritário do Partido Comunista. O novo regime aboliu a propriedade privada, nacionalizou a economia e promoveu a coletivização forçada no campo, o que causou crises como a Grande Fome na Ucrânia. A industrialização acelerada transformou a URSS em uma potência, mas com alto custo humano, incluindo o uso de trabalho forçado.
Houve avanços sociais, como melhorias na educação e saúde, mas sob forte repressão política, censura e perseguição a opositores. A URSS foi protagonista na Segunda Guerra Mundial e se tornou rival dos EUA na Guerra Fria, espalhando o comunismo pelo mundo. Seu legado é contraditório: trouxe progresso em alguns aspectos, mas também repressão e desigualdades dentro do próprio regime socialista."
            imagem="https://m.media-amazon.com/images/I/61cd3w6WSAL._AC_UF894,1000_QL80_.jpg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RevolucaoRussa;
