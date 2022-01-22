import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPi } from "../services/cryptoAPi";
import { cryptoNewsAPi } from "../services/cryptoNewsApi";
export default configureStore({
  reducer: {
    [cryptoAPi.reducerPath]: cryptoAPi.reducer,
    [cryptoNewsAPi.reducerPath]: cryptoNewsAPi.reducer,
  },
});
