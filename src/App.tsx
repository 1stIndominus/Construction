import "./App.scss";
import { ShowMenuProvider } from "./context/ContextMenu";
import { useTrackEvent } from "./hooks/useTrackEvent";
import AppRoute from "./router/AppRoute";
import { AnalyticsEvent } from "./types/type";

function App() {
  useTrackEvent({ eventName: AnalyticsEvent.siteHasBeenOpened });
  return (
    <div className="App">
      <ShowMenuProvider>
        <AppRoute />
      </ShowMenuProvider>
    </div>
  );
}

export default App;
