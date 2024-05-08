import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import Profile from "./components/Profile/Profile";
import RightSide from "./components/RightSide/RightSide"

function App() {
  return (
    <div className="appContainer">
      <LeftSide />
      <Profile />
      <RightSide />
    </div>
  );
}

export default App;