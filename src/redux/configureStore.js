import { createStore } from "redux";
import { initialState, Reducer } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(
    Reducer ,
    initialState// reducer
  );

  return store;
};
