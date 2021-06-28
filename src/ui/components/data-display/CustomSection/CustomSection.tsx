import React from "react";
import Grid from "@material-ui/core/Grid";

import { DefaultImage, ContainerCustomSection } from "./CustomSection.style";
import { ImageFont } from "ui/styles/pages/index.style";

const CustomSection: React.FC = () => {
  return (
    <ContainerCustomSection>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h2 className="subtitle">3. Aprender a viver com os outros</h2>
          <p className="text">
            (Cooperar com os outros e com o desenvolvimento da comunidade)
          </p>
          <p className="text">
            A aprendizagem inicia-se desde o começo da vida. Muito antes de a
            criança entrar na escola, enquanto cresce e se desenvolve em todos
            os âmbitos (físico, cognitivo e socioemocional), ela aprende nos
            contextos de seus relacionamentos afetivos.
          </p>
          <p className="text">
            Especialmente na primeira infância, no período compreendido entre 0
            e 6 anos - mas não só -, a aprendizagem é fortemente influenciada
            por todo o meio onde a criança se encontra e com o qual interage.
          </p>
        </Grid>
        <Grid item xs={6}>
          <DefaultImage />
          <ImageFont>
            Fonte: "Capitão Planeta" Turner Program Services
          </ImageFont>
        </Grid>
        <Grid item xs={12} sx={{ height: "300px", mt: 5 }}>
          <DefaultImage />
          <ImageFont>
            Fonte: "Os Incríveis", Pixar Animation Studios e Walt Disney Studios
          </ImageFont>
        </Grid>
        <Grid item xs={12}>
          <p className="text">
            Uma vez que a aprendizagem infantil ocorre, de maneira contínua, nas
            relações que a criança constrói desde que nasce - seja com seus pais
            e cuidadores, professores, outras crianças e as pessoas que fazem
            parte da comunidade em que vivem -, estas crianças experienciam e
            aprendem sobre o mundo através dos relacionamentos socioafetivos que
            constroem e estes, por sua vez, exercem influência em todos os
            aspectos do desenvolvimento infantil.
          </p>
          <p className="text">
            O conhecimento da vida cotidiana é importante para a construção da
            autonomia e socialização das crianças, aspectos essenciais para o
            aprendizado. Este aprendizado vai depender das condições específicas
            de cada criança, do contexto familiar, das condições materiais e de
            existência de cada família, bem como recebe as mais diversas
            influências.
          </p>
        </Grid>
        <Grid item xs={6}>
          <DefaultImage />
          <ImageFont>Fonte: giphy</ImageFont>
        </Grid>
        <Grid item xs={6}>
          <p className="text">
            A Primeira Infância é, portanto, um período sensível para o
            desenvolvimento de habilidades e funções cognitivas complexas
            envolvidas no processo de aprendizagem. É nesta etapa que se formam
            as bases para as funções cerebrais superiores como a linguagem, a
            memória, o raciocínio lógico, a discriminação auditiva, a percepção
            visual e espacial, entre outras.
          </p>
          <p className="text">
            É ainda na infância onde ocorrem os períodos favoráveis para o
            desenvolvimento e o aprendizado de determinadas habilidades, pois,
            nesta etapa, o cérebro é mais plástico e suscetível a ser estimulado
            e impactado pelos eventos ambientais. Essa plasticidade, que é a
            capacidade de fazer e desfazer ligações entre neurônios como
            consequência das interações constantes com o ambiente externo e
            interno do corpo, propicia ao cérebro infantil a criação de novas
            sinapses e o aumento da complexidade de ligações neuronais, fazendo
            com que as associações entre conhecimentos prévios e conhecimentos
            recém-adquiridos ocorram mais facilmente do que em outras etapas da
            vida.
          </p>
        </Grid>
      </Grid>
    </ContainerCustomSection>
  );
};

export default CustomSection;
