import "./App.scss";
import { HomeScreen } from "./screens/home-screen/HomeScreen";
import { ShowMenuProvider } from "./context/ContextMenu";

function App() {
  return (
    <div className="App">
      <ShowMenuProvider>
        <HomeScreen />
      </ShowMenuProvider>
    </div>
  );
}

export default App;
