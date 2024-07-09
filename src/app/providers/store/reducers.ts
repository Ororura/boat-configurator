import { combineReducers } from "redux";
import { sharedSlice } from "@/shared/slice";

export const reducers = combineReducers({
  shared: sharedSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
