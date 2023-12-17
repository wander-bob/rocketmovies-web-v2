import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled(Link)`
  display: flex;
  gap: .8rem;
  align-items: center;
  color: ${theme.pink._500};
  > svg {
    stroke: ${theme.pink._500};
    font-size: 2rem;
  }
`;