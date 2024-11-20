import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./Components/Routing/MainRoutes";
import store from "./Services/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;
