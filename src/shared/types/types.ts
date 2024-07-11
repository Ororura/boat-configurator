type SelectedParams = {
  displacement: string;
  GTEType: string;
  speed: string;
  cruisingRange: string;
  deckConfiguration: string;
  numberOfSuperstructures: string;
  typeOfStarter: string;
  mainDeckConfiguration: string;
};

type ConstantsTypes = {
  initialSlice: SelectedParams;
};

export type { SelectedParams, ConstantsTypes };
