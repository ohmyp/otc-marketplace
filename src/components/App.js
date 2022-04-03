import Main from "../pages/Main";
import MarketList from "../pages/MarketList";
import { Route } from "react-router-dom";
import ConnectWallet from "../pages/ConnectWallet";

function App() {
  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/market">
        <MarketList />
      </Route>
      <Route path="/connectwallet">
        <ConnectWallet />
      </Route>
    </>
  );
}

export default App;
