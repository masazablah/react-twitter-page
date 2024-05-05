import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="appContainer">
      <LeftSide />
      <Profile />
    </div>
  );
}

export default App;