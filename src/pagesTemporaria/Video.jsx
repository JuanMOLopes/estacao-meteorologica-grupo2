import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Vídeo() {
  return (
    <>
      <Header titulo="Vídeo - De Mussolini a Vargas: A Era das Ditaduras no Século XX | Cicatrizes do Tempo" />

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/oZEGmDtycGs?si=mYxpuiv-RBXxbLCb"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <Footer />
    </>
  );
}
export default Vídeo;
