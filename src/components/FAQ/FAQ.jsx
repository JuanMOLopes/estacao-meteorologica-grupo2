import "./FAQ.";

import { useState } from "react";

function FAQ(props) {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <>
      <div className="container-faq">
        <div className="pergunta">
          <button onClick={() => setMostrarResposta(!mostrarResposta)}>
            {props.pergunta}
          </button>
        </div>

        {mostrarResposta && (
          <div className="resposta">
            <p>{props.resposta}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FAQ;
