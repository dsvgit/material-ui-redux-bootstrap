import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import reducer from "./reducer";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);
export default store;
