import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";

function App() {
  const handleClick = () => {};

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
