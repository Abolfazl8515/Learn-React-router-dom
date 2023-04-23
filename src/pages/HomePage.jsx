const HomePage = (props) => {
  return (
    <div>
      <h1>This is Home page</h1>
      <button onClick={() => props.history.push("/about-us")}>
        Go to about us
      </button>
    </div>
  );
};

export default HomePage;
