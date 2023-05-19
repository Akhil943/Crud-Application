import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Notfound from "./pages/Notfound";
import "../src/pages/Style.css";

import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/read" element={<Read/>} />
      <Route path="*" element={<Notfound/>} />

     </Routes>
    </div>
  );
}

export default App;
