import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
// useEffect Hook
// The Effect Hook lets you perform side effects in functional components
// it's a close replacement for componentDidMount, componentDidupdate and componentWillUnmount.
