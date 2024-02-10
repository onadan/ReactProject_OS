import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from 'react-redux'
import Background from "./components/Background.tsx";
import store from "./redux/stores.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<Provider store={store}>

      <Background>
        <App />
      </Background>
      </Provider>
    
  </React.StrictMode>
);
