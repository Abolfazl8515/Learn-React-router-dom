import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>
        {routes.map((r) => (
          <Route {...r} />
        ))}
      </Layout>
    </div>
  );
}

export default App;
