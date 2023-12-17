import {FiX, FiPlus} from "react-icons/fi";
import { Container } from "./styles";

export function TagNew ({isNew, title, onClick, onChange}){
  return (
    <Container className={isNew ? "new" : ""} >
      <input 
        type="text" 
        value={title} 
        readOnly={!isNew}
        placeholder={title ? "" :"Novo marcador"} 
        onChange={onChange}
      />
      <button onClick={onClick} type="button">
        {isNew ?  <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}