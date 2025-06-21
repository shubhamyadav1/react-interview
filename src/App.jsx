const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="shuhb" age={28} />
      <ChildComponent name="raj" age={18} />
    </div>
  );
};

const ChildComponent = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>{name + " " + age}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};
export default App;
