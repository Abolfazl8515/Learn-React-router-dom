import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
];

export default routes;
