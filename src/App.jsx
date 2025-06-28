import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseContextHook from "./components/UseContextHook";
const App = () => {
  return (
    <div>
      <h1>Hooks Examples</h1>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      <UseContextHook />
    </div>
  );
};

export default App;
