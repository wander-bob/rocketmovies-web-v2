import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.2rem;
  background: ${theme.gray._600};
  border-radius: 1rem;
  padding: 1.9rem 2.4rem;
  > svg {
    font-size: 2.4rem;
    stroke: ${theme.gray._400};
  }
  input{
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: ${theme.white};
    &::placeholder{
      color: ${theme.gray._400};
      font-size: 1.4rem;
    }
  }
`