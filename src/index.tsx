import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { env, IOkraOptions } from './utils/interfaces';
import { OkraWidgetProvider } from './hooks/OkraWidgetProvider';



const div = document.getElementById("okra-widget");

const options: IOkraOptions = {
  key: div?.dataset.key || "",
  env: div?.dataset.env as env || "sandbox",
  token: div?.dataset.token || "",
  country: div?.dataset.country || "",
  payment: Boolean(div?.dataset.payment) || true,
  charge: {
    amount: parseInt(div?.dataset.amount || "0"),
    currency: div?.dataset.currency || ""
  }
};


const root = ReactDOM.createRoot(
  div as HTMLElement
);
root.render(
  <React.StrictMode>
    <OkraWidgetProvider options={options}>
      <App />
    </OkraWidgetProvider>
  </React.StrictMode>
);

serviceWorker.register()
