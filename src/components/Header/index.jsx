import { Container } from "./styles";
import {Logo} from "../Logo";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
export function Header({children}){  
  const {user} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return (
    <Container>
      <Logo />
      {children}
      <Avatar url={avatarUrl ?? avatarUrl} name={user.name}/>
    </Container>
  )
}