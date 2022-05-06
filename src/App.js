import Topbar from "./components/topbar/topBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Login />
    </div>
  );
}

export default App;
