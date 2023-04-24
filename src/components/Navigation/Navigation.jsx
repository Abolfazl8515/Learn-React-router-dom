import { withRouter, NavLink } from "react-router-dom";

const items = [
  { name: "Home page", to: "/", exact: true },
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
          {items.map((i, index) => (
            <li key={index}>
              <NavLink
                to={i.to}
                activeClassName="activeNav"
                exact={i.exact || false}
              >
                {i.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
