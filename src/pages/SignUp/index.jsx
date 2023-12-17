import { useState } from "react";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {LinkButton} from "../../components/LinkButton";
import { api } from "../../services/api";
export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSignup(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }
    api.post("/user", {name, email, password})
    .then(()=>{
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    }).catch((error) => {
      console.log(error);
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível realizar o cadastro.");
      }
    });
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Nome" icon={<FiUser/>} onChange={(event)=> setName(event.target.value)}/>
        <Input placeholder="E-mail" type="email" icon={<FiMail/>} onChange={(event)=> setEmail(event.target.value)}/>
        <Input placeholder="Senha" type="password" icon={<FiLock/>} onChange={(event)=> setPassword(event.target.value)}/>
        <Button title="Cadastrar" onClick={handleSignup}/>
        <LinkButton to="/" icon={<FiArrowLeft />} title="Voltar para o login" />
      </Form>
      <Background/>
    </Container>
  )
}