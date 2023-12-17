import { Container } from "./styles";
export function AvatarImg({to, url, description}){
  return (
    <Container to={ to ?? to  }>
      <img src={url} alt={description ?? description} />
    </Container>
  )
}