import styled from "styled-components";
import {FiStar} from "react-icons/fi";
import { theme } from "../../styles/theme";
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
  margin-top: .8rem;
  cursor: pointer;
  > svg * {
    stroke: ${theme.pink._500}
  }
`;

export const Star = styled(FiStar)`
  &:hover{
    transform: scale(1.2);
  }
`