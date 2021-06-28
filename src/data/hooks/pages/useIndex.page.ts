import { useState } from "react";

import { InformationStepInterface } from "data/@types/InformationStepInterface";
import { carouselDataInterface } from "data/@types/InformationCarouselInterface";
import * as data from "data/services/DataContentService";

export default function useIndex() {
  const [InformationStepData, setInformationStepData] = useState(data.InformationStepData as InformationStepInterface[]),
    [carouselData, setCarouselData] = useState(data.carouselData as carouselDataInterface);

  const toggleStep = index => {
    let tempSteps = [...InformationStepData]

    tempSteps[index].visible = !tempSteps[index].visible
    setInformationStepData(tempSteps)
  };

  const previousCarouselStep = () => {
    let tempCarouselData = JSON.parse(JSON.stringify(carouselData))
    if (tempCarouselData.currentStep > 1) {
      tempCarouselData.currentStep -= 1
      tempCarouselData.items.forEach(item => {
        item.actived = false
      });
    }
    for (let i = 0; i < tempCarouselData.currentStep; i++) {
      tempCarouselData.items[i].actived = true
    }

    setCarouselData(tempCarouselData)
  }

  const nextCarouselStep = () => {
    let tempCarouselData = JSON.parse(JSON.stringify(carouselData))
    if (tempCarouselData.currentStep < tempCarouselData.items.length) {
      tempCarouselData.currentStep += 1
      tempCarouselData.items.forEach(item => {
        item.actived = false
      });
    }
    for (let i = 0; i < tempCarouselData.currentStep; i++) {
      tempCarouselData.items[i].actived = true
    }

    setCarouselData(tempCarouselData)
  }

  return {
    toggleStep,
    InformationStepData,
    previousCarouselStep,
    nextCarouselStep,
    carouselData
  };
}
