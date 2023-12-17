import {FiArrowLeft} from "react-icons/fi";
import { Container } from "./styles";

export function LinkButton({icon, title, to, onClick}){
  return (
    <Container to={to ?? to} onClick={onClick} >
      {icon ? icon : <FiArrowLeft/>}
      {title}
    </Container>
  )
}