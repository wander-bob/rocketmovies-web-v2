import { Container } from "./styles";

export function Input({type, value, placeholder, icon, onChange }){
  return (
    <Container >
      {icon ?? icon}
      <input 
        type={type ? type : "text"}
        value={value ?? value}
        placeholder={placeholder ?? placeholder}
        min={0}
        max={5}
        onChange={onChange}
      />
    </Container>
  )
}