import { Router, Switch, Route } from "react-router-dom";
import Hakkımızda from "./Components/Body/Hakkımızda/Hakkımızda";
import Home from "./Components/Body/Home/Home";
import Misyonvizyon from "./Components/Body/MisyonVizyon/Misyonvizyon";
import Sürdürebilirlik from "./Components/Body/Sürdürebilirlik/Sürdürebilirlik";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className=" max-md:pt-20 pt-32">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Hakkımızda">
            <Hakkımızda />
          </Route>
          <Route exact path="/MisyonveVizyon">
            <Misyonvizyon />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
