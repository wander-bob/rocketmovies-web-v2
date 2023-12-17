import { useState, useEffect } from "react";
import { Container } from "./styles";
import {Header} from "../../components/Header";
import { Input } from "../../components/Input";
import { MainContent } from "../../components/MainContent";
import { NotesContainer } from "../../components/NotesContainer";
import { api } from "../../services/api";
export function Home(){
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");  
  useEffect(()=>{
    async function fetchNotes(){
      const result = await api.get(`/movie-notes/?title=${search}`);
      setNotes(result.data)
    }
    fetchNotes();
  }, [, search])
  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" onChange={(event)=> setSearch(event.target.value)} />
      </Header>
      <MainContent />
      <NotesContainer data={notes} />
    </Container>
  )
}