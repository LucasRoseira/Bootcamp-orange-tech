
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';


const Home = () => {
  //Para retornar mais de um elemento precisa se usar a forma abaixo <> </>
  return (
    <>
      <Header/>
      {/* <Button title="Teste 1" />
      <Button variant="secondary" title="Teste 2"/>
      <Link to="/login">Fazer login</Link> */}
      {/* <button>Fazer login</button> */}
    </>
  );
};

export { Home };
