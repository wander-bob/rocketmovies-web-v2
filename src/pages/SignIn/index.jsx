import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
export function SignIn(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const { signIn } = useAuth();
  function handleSignin(){
    signIn({email, password});
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="email" icon={<FiMail/>} onChange={(event) => setEmail(event.target.value)}/>
        <Input placeholder="Senha" type="password" icon={<FiLock/>} onChange={(event)=> setPassword(event.target.value)}/>
        <Button title="Entrar" onClick={handleSignin}/>
        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background/>
    </Container>
  )
}