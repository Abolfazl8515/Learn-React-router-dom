import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>The page not found 404</p>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound;
