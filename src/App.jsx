import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </Layout>
    </div>
  );
}

export default App;
