const featureComponent = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <>
          <h3>Welcome, {props.name} 👋</h3>
          <button onClick={props.logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Please log in</h3>
          <button onClick={props.login}>Login</button>
        </>
      )}
    </div>
  );
};

export default featureComponent;
