import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled(Link)`
  background-color: ${theme.pink._500};
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  padding: 1.6rem 3.2rem;
  > span {
    color: ${theme.gray._800};
  }
  > svg {
    stroke: ${theme.gray._800};
  }
  &.exclude {
    background-color: ${theme.gray._900};
    > span {
      color: ${theme.pink._500};
    }
  }
`