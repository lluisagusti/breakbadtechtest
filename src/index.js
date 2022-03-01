import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./i18n/es/global.json"
import global_en from "./i18n/en/global.json"


const lastLanguageUsed = localStorage.getItem("BreakingBadLanguage");

i18next.init({
  interpolation: { escape: false },
  lng: lastLanguageUsed || "en",
  resources: {
    es: {global: global_es},
    en: {global: global_en},
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
