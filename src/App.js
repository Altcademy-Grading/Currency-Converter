import Navbar from "./Navbar";
import List from "./pages/List";
import Converter from "./pages/Converter";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
