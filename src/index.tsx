import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { baseTheme } from "./baseTheme";
import reportWebVitals from "./reportWebVitals";
import { store } from "store/store";
import { CustomRouter } from "core/components/CustomRouter";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRouter history={history}>
        <ThemeProvider theme={baseTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CustomRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
