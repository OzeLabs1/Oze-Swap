import React from "react";
import "./App.less";
import { Routes } from "./routes";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolflareWebWallet,
    getSolletWallet,
    getSolletExtensionWallet,
    getSolongWallet,
    getLedgerWallet,
    getSafePalWallet,
} from "@solana/wallet-adapter-wallets";

import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui';

const App = () => {
  // Custom RPC endpoint.
const endpoint = useMemo(() => clusterApiUrl(network), []);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          getPhantomWallet(),
          getSlopeWallet(),
          getSolflareWallet(),
          getSolflareWebWallet(),
          getSolletWallet({ network }),
          getSolletExtensionWallet({ network }),
          getSolongWallet(),
          getLedgerWallet(),
          getSafePalWallet(),
      ],
      []
  );
function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          POWERED BY TDC.
        </div>
      </div>
      <Routes />
     
    </div>
  );
}

export default App;
