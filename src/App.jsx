import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
