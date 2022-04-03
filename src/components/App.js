import Main from "../pages/Main";
import MarketList from "../pages/MarketList";
import AboutUs from "../pages/AboutUs";
import { Route } from "react-router-dom";

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
    </>
  );
}

export default App;
