import { Header } from "./components/static/Header";
import "./index.css";
import { Home } from "./pages/Home";
import { Onboard } from "./pages/Onboard";

function App() {
  return (
    <>
      {/* <Onboard /> */}
      <Header />
      <Home />
    </>
  );
}

export default App;
