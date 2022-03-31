import Main from "../pages/Main";
import MarketList from "../pages/MarketList";
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
    </>
  );
}

export default App;
