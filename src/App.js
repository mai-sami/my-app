 import './App.css';
import Header from'./Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from'./Components/Body';

function App() {
  return (
    <Router>

    <div className="App">
            <Switch>
            <Route path="/">
              <Header />
              <Body />
             </Route>
            </Switch>
    </div>
    </Router>
  );
}

export default App;
