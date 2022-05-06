import Topbar from "./components/topbar/topBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Register />
    </div>
  );
}

export default App;
