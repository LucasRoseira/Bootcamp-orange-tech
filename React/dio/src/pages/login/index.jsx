import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import {
  Container,
  Column,
  Row,
  Wrapper,
  CriarText,
  EsqueciText,
  SubtitleLogin,
  Title,
  TitleLogin,
  ErrorText,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é válido")
      .required("Campo Obrigatório"),
    passoword: yup
      .string()
      .min(3, "No mínimo 3 caracteres!")
      .required("Campo Obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //  console.log(isValid, errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        "users?email=${formData.email}&senha=${formData.password}"
      );
      if (data.length === 1) {
      } else {
        alert("E-mail ou senha inválido");
      }

      console.log("retorno api", data);
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };
  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais ráido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make de change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email && <span>E-mail é obrigatório</span>}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={
                  errors.passoword && <span>Senha é obrigatório</span>
                }
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
