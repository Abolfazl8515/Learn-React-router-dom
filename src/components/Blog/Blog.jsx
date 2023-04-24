import { Link } from "react-router-dom";

const Blog = ({ match, location }) => {
  const id = match.params.id;
  console.log(location.search);
  return (
    <div>
      <h3>blog {id}</h3>
      <Link to="/blogs">Go to Blogs page</Link>
    </div>
  );
};

export default Blog;
