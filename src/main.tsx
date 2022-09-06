import React from "react";
import ReactDOM from "react-dom/client";
import App from "./presentation/App";
import "./core/style/index.css";
import { Provider as ReduxProvider } from "react-redux";
import Store, { persistor } from "./core/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
