import { Link } from "react-router-dom";

const items = [
  { name: "blog 1", to: "/blogs/1" },
  { name: "blog 2", to: "/blogs/2" },
  { name: "blog 3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <>
      <h2>Blog page</h2>
      <ul>
        {items.map((i) => (
          <li key={i.to}>
            <Link to={{ pathname: i.to, search: "name=abolfazl" }}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
