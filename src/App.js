import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
