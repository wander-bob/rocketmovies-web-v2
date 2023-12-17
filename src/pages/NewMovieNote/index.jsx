import { useState } from "react";
import { Container, Content, Form, TagsWrapper, ButtonsWrapper } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {LinkButton} from "../../components/LinkButton";
import { Input } from "../../components/Input";
import { TagNew } from "../../components/TagNew";
import {TextArea} from "../../components/TextArea";
import { Scrollbar } from "../../components/Scrollbar";
import {api} from "../../services/api";
import { useNavigate } from "react-router-dom";
export function NewMovieNote(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();
  function handleAddTag(){
    if(newTag && !tags.includes(newTag)){
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  }
  function handleRemoveTag(tagToRemove){
    setTags(prevState => prevState.filter(tag => tag !==tagToRemove));
  }
  async function handleNewNote(){
    if(!title){
      return alert("O título precisa ser inserido.")
    }
    if(!rating){
      return alert("A nota precisa ser inserida.")
    }
    if(!description){
      return alert("O filme precisa de uma descrição.")
    }
    if(!tags.length){
      return alert("Precisamos de pelo menos uma tag para criar a nota.")
    }
    try {
      await api.post(`/movie-notes/`, {title, description, tags, rating})
      alert("Nota criada com sucesso.")
      navigate("/")
    } catch (error) {
      console.log(error);
      if(error.response.data.message){
        return alert(error.response.data.message)
      }
      alert("Falha ao criar a nota");
    }
    
    
  }
  return (
    <Container>
      <Header/>
      <Content>
        <LinkButton title="Voltar" to="/" />
        <h2>Novo filme</h2>
        <Scrollbar>
          <Form>
            <div className="input-wrapper">
              <Input placeholder="Título" value={title} onChange={(event)=>setTitle(event.target.value)}/>
              <Input placeholder="Sua nota (0 to 5)" value={rating} type="number" onChange={(event)=> setRating(event.target.value)}/>
            </div>
            <TextArea value={description} placeholder="Observações" val onChange={(event)=>setDescription(event.target.value)} />
            <h3>Marcadores</h3>
            <TagsWrapper>
              {
                tags.map((tag, index)=>(
                  <TagNew key={String(
                    index)} title={tag} onClick={()=>handleRemoveTag(tag)}/>
                ))
              }
              <TagNew isNew="true" title={newTag} onChange={(event)=> setNewTag(event.target.value)} onClick={handleAddTag}/>
            </TagsWrapper>
            <ButtonsWrapper>
              
              <Button title="Salvar alterações" onClick={handleNewNote}/>
            </ButtonsWrapper>
          </Form>
        </Scrollbar>
      </Content>
    </Container>
  )
}