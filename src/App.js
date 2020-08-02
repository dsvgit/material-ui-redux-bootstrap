import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as FetchProvider } from "use-http";

import store, { persistor } from "./store";
import config from "./config";
import Routing from "./pages/Routing";

export default function App() {
  const fetchOptions = {
    interceptors: {
      request: async ({ options, url, path, route }) => {
        options.headers["Content-Type"] = `application/json`;
        return options;
      },
      response: async ({ response }) => {
        const res = response;
        return res;
      }
    }
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FetchProvider url={config.API_HOST}>
          <Routing />
        </FetchProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
