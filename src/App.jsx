// children props are special props that lets you pass JSX inside a component.
// children props example

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card>
        <h2>User Profile</h2>
        <p>Name: Alice</p>
      </Card>

      <Card>
        <h2>Settings</h2>
        <p>Dark Mode: Enabled</p>
      </Card>
    </div>
  );
};
export default App;
