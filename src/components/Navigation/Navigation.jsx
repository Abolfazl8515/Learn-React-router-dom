import { Link, withRouter } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/about-us">about us page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
