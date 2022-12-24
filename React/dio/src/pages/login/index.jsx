import { Link } from "react-router-dom";

const Login = () => {
  //Para retornar mais de um elemento precisa se usar a forma abaixo <> </>
  return (
    <>
      <h1>Login</h1>
      <Link to="/">Voltar para Home</Link>

      {/* <button>Voltar para Home</button> */}
    </>
  );
};

export { Login };
