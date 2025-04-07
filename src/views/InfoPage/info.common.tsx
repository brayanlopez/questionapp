import React from "react";
import { Link } from "@mui/material";

export const questions = [
  {
    question:
      "Quiero copiar las preguntas, pero no me deja copiar algunos simbolos matemáticos.",
    answer:
      "Cada pregunta tiene un boton de copiado, el cual te permite copiar la pregunta para usarla en alguna prueba que estes construyendo o incluso llevarla a algún modelo de inteligencia artificial como ChatGPT para hacerte una idea de como resolverla o revisar explicaciones alternativas.",
  },
  {
    question: "Quiero ponerme en contacto con ustedes",
    answer:
      " Si tienes alguna duda, encontraste un error en alguna pregunta o tienes alguna sugerencia no dudes en contactarnos en otro.canal.contacto@gmail.com ",
  },
  {
    question: "¿Tienen algún convenio con alguna universidad?",
    answer:
      "No, actualmente no tenemos ningún convenio o patrocinio con ninguna universidad o institución",
  },
  {
    question:
      "¿Dónde puedo hacer un simulacro lo más parecido posible a las pruebas de la UNAL?",
    answer: (
      <>
        La Universidad Nacional de Colombia Sede Manizales desarrolló una{" "}
        <Link
          href="https://www.uninscripciones.unal.edu.co/dipa/"
          target="_blank"
          rel="noreferrer"
        >
          Demostración Interactiva de la Prueba de Admisión
        </Link>{" "}
        una aplicación conocida comunmente como pruebas DIPA. Es muy útil para
        familiarizarse con el examén y el tipo de preguntas de la prueba.
      </>
    ),
  },
];

// TODO: check for section between questions and more necessary things
// ¿Dónde puedo encontrar más material sobre la UNAL?
// ¿Tengo dudas sobre las pruebas específicas?
// ¿Qué motivo la creación de esta página?
// ¿?

export default questions;
