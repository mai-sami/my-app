 import './App.css';
import Header from'./Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from'./Components/Body';
import BodyHome from'./Components/BodyHome';
import Footer from'./Components/Footer';

function App() {
  return (
    <Router>

    <div className="App">
            <Switch>

            <Route path="/footer">
       
       <Footer />
        </Route>
            <Route path="/">
              <Header />
              <Body />
              <BodyHome />
            <Footer />
             </Route>

           
            </Switch>
    </div>
    </Router>
  );
}

export default App;
