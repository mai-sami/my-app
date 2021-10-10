import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from './Components/Body';
import BodyHome from './Components/BodyHome';
import Footer from './Components/Footer';
import Headers from './ComponentProducts/Headers';
import AllBody from './ComponentProducts/AllBody';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import TermsCondition from './Pages/TermsCondition';
import Privacy from './Pages/Privacy';
import AboutUs from './Pages/AboutUs';
import { useTranslation } from "react-i18next";
import "./translations/i18n";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/about">
            <Headers />
            <AboutUs />
            <Footer />

          </Route>

          <Route path="/privacy">
            <Headers />
            <Privacy />

            <Footer />

 
          </Route>

          <Route path="/terms">
            <Headers />
            <TermsCondition />
            <Footer />

          </Route>

          <Route path="/login">
            <Headers />
            <Register />
            <Footer />


          </Route>

          <Route path="/contact_us">
            <Headers />
            <Contact />
            <Footer />

          </Route>

          <Route exact path="/forget">
            <Headers />
            <ForgetPassword />
            contact_us
          </Route>

          <Route path="/product">
            <Headers />
            <AllBody />
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
