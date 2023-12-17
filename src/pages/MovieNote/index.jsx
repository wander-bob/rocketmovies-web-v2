import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { Container, Content, NoteWrapper } from "./styles";
import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { Button } from "../../components/Button";
import { NoteRating } from "../../components/NoteRating";
import { Tag } from "../../components/Tag";
import { Scrollbar } from "../../components/Scrollbar";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { AvatarImg } from "../../components/AvatarImg";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
export function MovieNote(){
  const {user} = useAuth();
  const [note, setNote] = useState(null);
  const params = useParams();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const navigate = useNavigate();
  function handleBack(){
    navigate(-1)
  }
  async function handleRemoveMovieNote(){
    const confirm = window.confirm("Realmente deseja excluir a nota?");
    if(confirm){
      await api.delete(`/movie-notes/${params.id}`);
      handleBack();
    }
  }
  useEffect(()=>{
    async function fetchNote(){
      const response = await api(`movie-notes/${params.id}`)
      setNote(response.data);
    }
    fetchNote()
  }, [])
  return(
    <Container>
      <Header />
      {
        note &&
        <NoteWrapper>
        <Scrollbar>  
            <LinkButton title="Voltar" to="/" />
              <Content>
                <div className="note-title-top">
                  <h2>{note.title}</h2> 
                  <NoteRating movieRating={note.rating}/>
                </div>
                <div className="note-title-bottom">
                  <span><AvatarImg url={avatarUrl}/> {user.name}</span>
                  <span><FiClock/>{note.created_at}</span>
                </div>
                <div className="tags-container">
                {
                  note.tags && note.tags.map((tag) => <Tag key={String(tag.id)} title={tag.name}/>)
                }
                </div>
                <span>{note.description}</span>
                <Button exclude title="Excluir filme" type="button" onClick={handleRemoveMovieNote} />
              </Content>
          </Scrollbar>
        </NoteWrapper>
      }
    </Container>
  )
}