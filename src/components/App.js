import Main from "../pages/Main";
import MarketList from "../pages/MarketList";
import AboutUs from "../pages/AboutUs";
import { Route } from "react-router-dom";
import ConnectWallet from "../pages/ConnectWallet";
import OurContacts from "../pages/OurContacts";

function App() {
  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/market">
        <MarketList />
      </Route>
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route path="/connectwallet">
        <ConnectWallet />
      </Route>
      <Route path="/ourcontacts">
        <OurContacts />
      </Route>
    </>
  );
}

export default App;
