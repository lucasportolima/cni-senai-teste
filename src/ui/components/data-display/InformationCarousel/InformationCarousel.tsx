import React from "react";
import Grid from "@material-ui/core/Grid";

import { ItemsCarouselInterface } from "data/@types/InformationCarouselInterface";
import {
  IconStep,
  TextStep,
  DotsStep,
} from "ui/components/data-display/InformationCarousel/InformationCarousel.style";

const InformationCarousel: React.FC<ItemsCarouselInterface> = ({
  data,
  nextAction,
  previousAction,
}) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid onClick={() => previousAction()} item xs={2}>
          <IconStep
            src={
              data.currentStep === 1
                ? "/Seta_esquerda_inativa.png"
                : "/Seta_esquerda.png"
            }
          />
        </Grid>
        {data.items.map((step, index) => {
          return (
            <>
              {step.actived && index === data.currentStep - 1 && (
                <Grid item xs={8}>
                  <IconStep src={step.icon} />
                  <TextStep mt={5} mb={1}>{step.text}</TextStep>
                </Grid>
              )}
            </>
          );
        })}
        <Grid item xs={2}>
          <IconStep
            onClick={() => nextAction()}
            src={
              data.currentStep === data.items.length
                ? "/Seta_direita_inativa.png"
                : "/Seta_direita.png"
            }
          />
        </Grid>
        <Grid item xs={8}>
          <DotsStep>
            {data.items.map((step, index) => {
              return (
                <img
                  src={
                    index <= data.currentStep - 1
                      ? "/bolinha_ativada.svg"
                      : "/bolinha_nao_ativada.svg"
                  }
                />
              );
            })}
          </DotsStep>
        </Grid>
      </Grid>
    </div>
  );
};

export default InformationCarousel;