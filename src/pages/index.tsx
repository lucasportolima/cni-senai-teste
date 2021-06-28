import {
  Typography,
  Container,
} from "@material-ui/core";
import InformationStep from "ui/components/data-display/InformationStep/InformationStep";
import CustomSection from "ui/components/data-display/CustomSection/CustomSection";
import InformationCarousel from "ui/components/data-display/InformationCarousel/InformationCarousel";
import InformationBox from "ui/components/data-display/InformationBox/InformationBox";
import {
  MainContent,
  SectionContainer,
  SectionContent,
  Title,
  DefaultImage,
  Graphic,
  ImageFont,
  NextModuleBtn,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    toggleStep,
    InformationStepData,
    previousCarouselStep,
    nextCarouselStep,
    carouselData,
  } = useIndex();

  return (
    <MainContent>
      <Container color={"transparent"}>
        <SectionContainer>
          <SectionContent sx={{ p: 0 }}>
            <Title className="title">
            Teorias da aprendizagem  
            </Title>
            <Typography className="text" mt={-3}>
            Aprendizagem é um processo que pode ser entendido à luz de diferentes paradigmas com diferentes perspectivas.
            </Typography>
          </SectionContent>
          <SectionContent>
            <DefaultImage></DefaultImage>
          </SectionContent>
        </SectionContainer>
        <SectionContent>
          <h2 className="subtitle">As teorias mais conhecidas são:</h2>
          <Typography className="text" mt={-3}>
            Clique nos ícones abaixo para saber mais sobre cada uma delas.
          </Typography>
        </SectionContent>
        {InformationStepData.map((step, index) => {
          return (
            <SectionContent key={`section-${index}`}>
              <InformationStep
                key={index}
                visible={step.visible}
                icon={step.visible ? step.iconAction : step.icon}
                text={step.text}
                title={step.title}
                onClick={() => toggleStep(index)}
              ></InformationStep>
            </SectionContent>
          );
        })}
        <SectionContainer sx={{ mt: { xs: 10, md: 40 } }}>
          <SectionContent>
            <h2 className="subtitle">Cada teoria</h2>
            <Typography className="text" sx= {{ mt: { xs: -4, md: -30 } }}>
              também vê o papel do professor de uma forma diferente.
            </Typography>
          </SectionContent>
          <SectionContent sx={{ mt: { xs: 20, sm: 0, md: 0 } }}>
            <InformationCarousel
              nextAction={nextCarouselStep}
              previousAction={previousCarouselStep}
              data={carouselData}
            ></InformationCarousel>
          </SectionContent>
        </SectionContainer>
        <SectionContent sx={{ mt: 10 }}>
          <InformationBox
            textsContent={[
              "Estas categorizações servem para facilitar e iniciar estudos sobre a aprendizagem e para impulsionar o desejo de explorar o mundo gigantesco do processo de aprendizagem. Na prática, esta categorização é questionável.",
              "Uma ou outra linha que delimita um paradigma pode estar contida em uma ou mais teorias e podemos nos beneficiar de diferentes contribuições para conduzir um processo de aprendizagem.",
            ]}
          ></InformationBox>
        </SectionContent>
        {carouselData.currentStep === carouselData.items.length && (
          <>
            <SectionContainer sx={{ mt: 10 }}>
              <SectionContent>
                <h2 className="subtitle">
                  Os 4 pilares fundamentais para a educação
                </h2>
                <span className="text">
                  foram elencados em um relatório entregue à UNESCO pela
                  Comissão Internacional sobre Educação para o Século XXI.
                  Continue rolando para baixo para saber mais sobre cada um
                  deles.
                </span>
              </SectionContent>
              <SectionContent>
                <Graphic src={"/grafico.svg"} />
              </SectionContent>
            </SectionContainer>
            <SectionContainer sx={{ mt: 10 }}>
              <SectionContent>
                <h2 className="subtitle">1. Aprender a conhecer</h2>
                <p className="text">(Obter instrumentos de compreensão)</p>
                <p className="text">
                  Apresentações são ferramentas de comunicação que podem ser
                  usadas em demonstrações, palestras, aulas, relatórios,
                  pesquisas, entre outras aplicações. A combinação de texto e
                  imagens ajuda a transmitir a mensagem de forma clara e segura,
                  melhorando o entendimento e cativando a atenção do público.
                </p>
              </SectionContent>
              <SectionContent>
                <DefaultImage></DefaultImage>
                <ImageFont>Fonte: giphy</ImageFont>
              </SectionContent>
            </SectionContainer>
            <SectionContainer sx={{ mt: 5 }}>
              <SectionContent>
                <DefaultImage></DefaultImage>
                <ImageFont sx={{ mt: { xs: 0, md: -5 } }}>Fonte: giphy</ImageFont>
              </SectionContent>
              <SectionContent>
                <h2 className="subtitle">2. Aprender a fazer</h2>
                <p className="text">(Agir no contexto que está inserido)</p>
                <p className="text">
                  Esse pilar não está separado do primeiro. Eles se completam no
                  sentido de que, para agir no mundo do século XXI, é preciso
                  aprender não só a reproduzir tarefas físicas, mas saber como
                  aplicar o conhecimento de forma inteligente com capacidade de
                  se comunicar, de trabalhar com outras pessoas, de resolver
                  conflitos, de estabelecer e manter boas e estáveis relações.
                </p>
              </SectionContent>
            </SectionContainer>
            <SectionContent sx={{ mt: 5 }}>
              <CustomSection></CustomSection>
            </SectionContent>
            <SectionContainer sx={{ mt: 5 }}>
              <SectionContent>
                <h2 className="subtitle">4. Aprender a ser</h2>
                <p className="text">
                  (Ser capaz de integrar todos os pilares anteriores)
                </p>
                <p className="text">
                  A educação deve ter como objetivo o desenvolvimento holístico
                  da pessoa. Em termos de aprendizagem, todo ser humano deve ter
                  seu processo orientado ao desenvolvimento de ferramentas que
                  possibilitem um pensamento crítico, criativo e autônomo.
                </p>
                <p className="text">
                  Todos os seres humanos devem ter o direito à liberdade de
                  pensamento, sentimento e ao desenvolvimento de seus talentos,
                  do nascimento até a morte, num processo dialético de
                  conhecimento de si à medida que descobre o outro.
                </p>
              </SectionContent>
              <SectionContent>
                <DefaultImage></DefaultImage>
                <ImageFont sx={{ mt: { xs: 0, md: -21 } }}>Fonte: giphy</ImageFont>
              </SectionContent>
            </SectionContainer>
            <SectionContent sx={{ mt: 10 }}>
              <InformationBox
                textsContent={[
                  "A aprendizagem é um processo contínuo de desenvolvimento pessoal e coletivo e a educação é o caminho pelo qual a personalidade é orientada à sua maturação.",
                  "VIVER É, DE FATO, UM CONSTANTE APRENDIZADO",
                  "Durante toda vida, os seres humanos passam por mudanças específicas que orientam o foco desse processo de aprendizagem. No próximo módulo, discutiremos o que é esperado alcançar em termos de desenvolvimento em cada fase da vida para que o processo decorra bem.",
                ]}
              ></InformationBox>
            </SectionContent>
            <Container sx={{ textAlign: "center" }}>
              <NextModuleBtn variant={"contained"}>
                Ir para o próximo módulo
              </NextModuleBtn>
            </Container>
          </>
        )}
      </Container>
    </MainContent>
  );
}
