import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h3>blog {id}</h3>
      <Link to="/blogs">Go to Blogs page</Link>
    </div>
  );
};

export default Blog;
