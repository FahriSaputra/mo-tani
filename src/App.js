import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
