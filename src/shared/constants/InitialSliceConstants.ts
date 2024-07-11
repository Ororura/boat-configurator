import { ConstantsTypes } from "@/shared/types/types";
import { useMemo } from "react";

const initialSliceConstants = useMemo<ConstantsTypes>(() => {
  return {
    initialSlice: {
      displacement: "40000 - 60000",
      GTEType: "Перспективная ГЭУ",
      speed: "До 27 узлов",
      cruisingRange: "До 8000 миль",
      deckConfiguration: "Плоская",
      numberOfSuperstructures: "Одна",
      typeOfStarter: "Не применяется",
      mainDeckConfiguration: "Угловая",
    },
  };
}, []);

export default initialSliceConstants.initialSlice;
