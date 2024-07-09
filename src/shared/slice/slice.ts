import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedParams } from "@/shared/types";
import { WritableDraft } from "immer";

const initialState: SelectedParams = {
  displacement: "40000 - 60000",
  GTEType: "Перспективная ГЭУ",
  speed: "До 27 узлов",
  cruisingRange: "До 8000 миль",
  deckConfiguration: "Плоская",
  numberOfSuperstructures: "Одна",
  typeOfStarter: "Не применяется",
  mainDeckConfiguration: "Угловая",
};

export const sharedSlice = createSlice({
  name: "shared",
  initialState: initialState,
  reducers: {
    setGTEType: (state, action: PayloadAction<string>) => {
      state.GTEType = action.payload;
    },
    setCruisingRange: (state: WritableDraft<SelectedParams>, action: PayloadAction<string>) => {
      state.cruisingRange = action.payload;
    },
    setDeckConfiguration: (state, action: PayloadAction<string>) => {
      state.deckConfiguration = action.payload;
    },
    setDisplacement: (state, action: PayloadAction<string>) => {
      state.displacement = action.payload;
    },
    setMainDeckConfiguration: (state, action: PayloadAction<string>) => {
      state.mainDeckConfiguration = action.payload;
    },
    setNumberOfSuperstructures: (state, action: PayloadAction<string>) => {
      state.numberOfSuperstructures = action.payload;
    },
    setSpeed: (state, action: PayloadAction<string>) => {
      state.speed = action.payload;
    },
    setTypeOfStarter: (state, action: PayloadAction<string>) => {
      state.typeOfStarter = action.payload;
    },
  },
});

export const {
  setGTEType,
  setNumberOfSuperstructures,
  setMainDeckConfiguration,
  setDeckConfiguration,
  setSpeed,
  setTypeOfStarter,
  setDisplacement,
  setCruisingRange,
} = sharedSlice.actions;
