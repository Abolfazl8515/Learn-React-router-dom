import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog/Blog";
import PostPage from "./pages/PostPage";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/about-us", component: AboutUs },
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
