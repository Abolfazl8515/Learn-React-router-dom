const PostPage = (props) => {
  const id = props.match.params.id || 1;
  console.log(id);
  console.log(props.match.params);
  return (
    <div>
      <h3>Post {id}</h3>
      <p>{JSON.stringify(props.match.params)}</p>
    </div>
  );
};

export default PostPage;
