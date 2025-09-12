import "./App.scss";
import { ShowMenuProvider } from "./context/ContextMenu";
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <div className="App">
      <ShowMenuProvider>
        <AppRoute />
      </ShowMenuProvider>
    </div>
  );
}

export default App;
