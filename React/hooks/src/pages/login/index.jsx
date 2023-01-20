import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("João");
  const [age, setAge] = useState(26);

  const handleChangeName = useCallback(() => {
    console.log("alterou nome");
    setName((prev) => (prev === "Marcos" ? "Larissa" : "Marcos"));
  }, []);

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("age atual", age, newAge);
    setAge((prev) => (prev === 26 ? 32 : 26));
  }, [age]);

  const changeUser = () => {
    handleChangeAge();
  };

  //Utilizado para guardar o estado do componente
  const calculo = useMemo(() => {
    // console.log("calculou", age);
    return 10 * age;
  }, [age]); //Se não quiser que calcule toda hora basta retirar a variável do array de dependências

  //Use Callback ao invés de memorizar um valor ele memoriza uma função

  // console.log("Render", calculo);

  // useEffect(() => {
  //   // alert("Rendenizei");
  //   changeUser();

  //   //Normalmente é utilizado quando você quer salvar que o usuário está offline assim que ele fechar
  //   // return () => {alert('desmontei')}
  // }, []);

  // useEffect(() => {
  //   alert("Rendenizei");
  // }, [name]);
  //Gerenciar quando um componente está rendezniando ou quando uma ação é executada novamente

  return (
    <>
      <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
      </div>
      <button onClick={handleChangeName}>Alterar Nome</button>
      <button onClick={handleChangeAge}>Alterar Idade</button>
    </>
  );
};

export { Login };
