import {FiPlus} from "react-icons/fi";
import { Button } from "../Button";
import { Container, Controls } from "./styles";

export function MainContent(){
  return (
    <Container>
      <Controls>
        <h2>Meus filmes</h2>
        <Button icon={<FiPlus />} title="Adicionar Filme" to="/new-movie-note" />
      </Controls>
    </Container>
  )
}