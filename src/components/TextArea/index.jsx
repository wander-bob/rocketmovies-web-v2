import {Container} from "./styles";
export function TextArea({value,placeholder, onChange}){
  return (
    <Container value={value} placeholder={placeholder} onChange={onChange}>
      
    </Container>
  )
}