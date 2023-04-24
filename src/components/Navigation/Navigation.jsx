import { Link, withRouter } from "react-router-dom";

const items = [
  { name: "Home page", to: "/" },
  { name: "about us page", to: "/about-us" },
  { name: "blogs", to: "/blogs" },
  { name: "post", to: "/post" },
  { name: "profile", to: "/profile" },
];

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {items.map((i) => (
            <li key={i.to}>
              <Link to={i.to}>{i.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
