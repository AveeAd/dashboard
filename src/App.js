import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
