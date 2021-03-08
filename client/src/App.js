import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import NewSearch from "./Pages/NewSearch"
import Library from "./Pages/Library"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Hero from './Components/Hero';
import Footer from "./Components/Footer"



function App() {
  return (
      <Router>

        <div className="App">
          <Hero />
          <Switch>
            <Route exact path={["/", "/Home"]}>
              <Home />
            </Route>
            <Route exact path={["/Books","/Library"]}>
              <Library/>
            </Route>
            <Route  exact path="/Search">
              <NewSearch />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>



  );
}

export default App;
