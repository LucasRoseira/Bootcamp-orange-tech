import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  const handleClick = () => {};

  //JSX só retorna um componente, não há com retornar lado a lado
  // return <div className="App"> Olá React</div>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>

    // <div className="App">
    //   <h1>Olá React</h1>

    /* <Button title="Entrar"/>
      <Button title="Fechar"/>
      <Button title="Abrir"/>
      <Button title="Salvar"/> */

    // </div>
  );
}

export default App;
