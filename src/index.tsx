import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { WalletProvider } from "./utils/wallet";
import { ConnectionProvider } from "./utils/connection";
import { AccountsProvider } from "./utils/accounts";
import { CurrencyPairProvider } from "./utils/currencyPair";

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider>
      <WalletProvider>
        <AccountsProvider>
          <CurrencyPairProvider>
            <App />
          </CurrencyPairProvider>
        </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
