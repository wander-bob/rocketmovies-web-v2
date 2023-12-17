import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.pink._400};
  margin-block: 1.6rem;
  border-radius: 1.6rem;
  min-height: 22rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > h3 {
    font-size: 2.4rem;
  }
  > span {
    margin-block: 1.4rem;
    color: ${theme.gray._300};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  gap: .8rem;
`;