import { useState } from "react";

const ParentComponent = () => {
  const [message, setMessage] = useState("");
  const handleDataFromChild = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from child: {message}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

const ChildComponent = (props) => {
  const { sendDataToParent } = props;
  const handleClick = () => {
    sendDataToParent("Hello Parents");
  };
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Send Message to Parent</button>
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
