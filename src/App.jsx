import withLogin from "./withLogin";
import featureComponent from "./featureComponent";

const App = () => {
  const EnhancedFunction = withLogin(featureComponent);
  return (
    <div>
      <EnhancedFunction name="Shubh" />
    </div>
  );
};

export default App;
