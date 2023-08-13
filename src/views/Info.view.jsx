import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NavigationComponent from "../components/Navigation.component";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InfoView = () => {
  const questions = [
    {
      question:
        "Quiero copiar las preguntas, pero no me deja copiar algunos simbolos matemáticos",
      answer:
        "Cada pregunta tiene un boton de copiado, el cual te permite copiar la pregunta para usarla en alguna prueba que estes construyendo o incluso llevarla a algún modelo de inteligencia artificial como ChatGPT para hacerte una idea de como resolverla o revisar explicaciones alternativas.",
    },
    {
      question: "Quiero ponerme en contacto con ustedes",
      answer:
        " Si tienes alguna duda, encontraste un error en alguna pregunta o tienes alguna sugerencia no dudes en contactarnos en otro.canal.contacto@gmail.com ",
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
    {
      question: "¿Tienen algún convenio con la UNAL?",
      answer:
        "No, actualmente no tenemos ningún convenio o patrocinio con ninguna universidad",
    },
  ];

  // TODO: check for section between questions and more neccesary things
  // ¿Dónde puedo encontrar más material sobre la UNAL?
  // ¿Tengo dudas sobre las pruebas específicas?
  // ¿Qué motivo la creación de esta página?
  // ¿?

  return (
    <Grid
      className="main-container"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "0",
      }}
    >
      <NavigationComponent onClickBackButton={() => {}} />
      <Container>
        <Typography variant="h2">Información importante</Typography>
        <Typography variant="body1">
          En esta sección encontraras respuestás a algunas dudas comunes que
          puedas tener.
        </Typography>

        {questions.map((question, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight="bold">{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" align="justify">
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Grid>
  );
};

export default InfoView;
