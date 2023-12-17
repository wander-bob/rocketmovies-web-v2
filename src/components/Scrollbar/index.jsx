import { Container } from "./styles";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export function Scrollbar({children}){
  return (
    <Container>
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          {children}
        </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb"/>
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Container>
  )
}