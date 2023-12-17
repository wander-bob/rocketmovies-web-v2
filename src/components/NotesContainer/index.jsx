import { useNavigate } from "react-router-dom";
import { Note } from "../Note";
import { Container } from "./styles";
import { Scrollbar } from "../Scrollbar/";
export function NotesContainer({data}){
  const navigate = useNavigate();
  async function handleMovieDetails(id){
    navigate(`/movie-note/${id}`)
  }
  return (
    <Container>
      {
        !data.length ? <h2>Não há notas cadastradas ainda </h2> :
        <Scrollbar>
        {
          data.map((note)=>{
            return (
              <Note 
                key={note.id} 
                title={note.title} 
                content={note.description} 
                tags={note.tags} 
                rating={note.rating}
                onClick={()=> handleMovieDetails(note.id)}
              />
            )
          })
        }
      </Scrollbar>
      }
      
    </Container>
  )
}