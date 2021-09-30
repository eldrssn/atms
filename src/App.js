import { useState } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ATMPage from "./components/ATMPage";
import EnterPage from "./components/EnterPage";

function App() {
  const [atm, setAtm] = useState({}); 

  return (
    <HashRouter>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={(props) => <EnterPage setAtm={setAtm} {...props} />}
        />
        <Route 
          path="/atm/:id" 
          render={(props) => <ATMPage atm={atm} {...props} />}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
