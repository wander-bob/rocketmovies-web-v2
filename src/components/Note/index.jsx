import { Container, TagsContainer } from "./styles";
import {NoteRating} from "../NoteRating";
import { Tag } from "../Tag";
export function Note({title,rating,content,tags, onClick}){
  return (
    <Container onClick={onClick}>
      <h3>{title}</h3>
      <NoteRating movieRating={rating}/>
      <span>{content}</span>
      <TagsContainer>
        {
          tags.map((tag) => <Tag key={tag.id} title={tag.name} />)
        }
      </TagsContainer>
    </Container>
  )
}