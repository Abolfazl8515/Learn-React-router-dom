import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {routes.map((r) => (
            <Route {...r} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
