export interface InformationCarouselInterface {
  text: string;
  icon: string;
  actived: boolean;
}

export interface carouselDataInterface {
  items: InformationCarouselInterface[];
  currentStep: number;
}

export interface ItemsCarouselInterface {
  data: carouselDataInterface;
  previousAction: Function;
  nextAction: Function;
}
