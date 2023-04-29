import "./App.scss";
import { HomeScreen } from "./screens/home-screen/HomeScreen";
import { ShowMenuProvider } from "./helpers/ContextMenu";


function App() {
  return (
    <div className="App">
      <div className="main__content">
        <ShowMenuProvider>
          <HomeScreen />
        </ShowMenuProvider>
      </div>
    </div>
  );
}

export default App;
