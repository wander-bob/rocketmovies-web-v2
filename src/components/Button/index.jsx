import {Container} from "./styles";

export function Button({to, title, icon, exclude, onClick}){
  return (
    <Container to={to ?? to} onClick={onClick} className={exclude ? "exclude" : ""} >
      { icon ?? icon }
      <span>{title}</span>
    </Container>
  )
}