import { useState } from "react";
import {Container, Star} from "./styles";
import { theme } from "../../styles/theme";
export function NoteRating({movieRating}){
  const [rating, setRating] = useState(movieRating);
  const [hover, setHover] = useState(null);
  return (
    <Container>
      {
        [...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return(
            <Star 
              key={index}
              onClick={()=> setRating(currentRating)}
              fill={currentRating <= ( rating || hover ) ? theme.pink._500 : theme.pink._400}
              onMouseEnter={()=>setHover(currentRating)}
              onMouseLeave={()=> setHover(null)}
            />
            
          )
        })
      }
    </Container>
  )
}