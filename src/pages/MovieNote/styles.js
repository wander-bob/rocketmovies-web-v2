import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled.div`
  .ScrollAreaViewport {
    padding-inline: 0;
  }
  .ScrollAreaRoot {
    min-height: 44rem;
  }
`;
export const NoteWrapper = styled.div`
  padding-inline: 12.3rem;
  margin-top: 4rem;
`;
export const Content = styled.div`
  > span {
    display: inline-block;
    padding: 1.6rem;
    height: 10rem;
    margin-bottom: 2rem;
  }
  .note-title-top {
    margin-block: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    > h2 {
      font-size: 3.6rem;
      font-weight: 500;
    }
  }
  .note-title-bottom {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 4rem;
    img {
      height: 2rem;
      width: 2rem;
    }
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      > svg {
        stroke: ${theme.pink._500};
      }
    }
  }
  .tags-container {
    display: flex;
    gap: .8rem;
    margin-bottom: 4rem;
  }
`