import {useNavigate} from "react-router-dom";
import { Container, Logout, AvatarContent } from "./styles";
import {AvatarImg} from "../AvatarImg";
import { useAuth } from "../../hooks/auth";
export function Avatar({url, name}){
  const {signOut} = useAuth();
  const navigate = useNavigate();
  function handleSignOut(){
    navigate("/")
    signOut();
  }

  return (
    <Container>
      <AvatarContent>
        <strong>{name}</strong>
        <Logout onClick={handleSignOut}>Sair</Logout>
      </AvatarContent>
      <AvatarImg to="/profile" url={url ?? url} description={name}/>
    </Container>
  )
}