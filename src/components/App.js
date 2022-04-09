import Main from "../pages/Main";
import MarketList from "../pages/MarketList";
import AboutUs from "../pages/AboutUs";
import { Route } from "react-router-dom";
import ConnectWallet from "../pages/ConnectWallet";
import OurContacts from "../pages/OurContacts";
import Basket from "../pages/Basket";
import Order from "../pages/Order";
import { useEffect } from "react";

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
      <Route path="/basket">
        <Basket />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
    </>
  );
}

export default App;
