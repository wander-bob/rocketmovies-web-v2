import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    gap: 1.6rem;
    background: ${theme.gray._500};
    border-radius: 1rem;
    > input {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: ${theme.white};
      padding: .6rem 1.2rem;
      max-width: 14rem;
      &::placeholder{
        color: ${theme.gray._300};
      }
      }
    > button {
      display: flex;
      align-items: center;
      background-color: transparent;
      > svg {
        stroke: ${theme.pink._500};
        font-size: 2.2rem;
      }
    }
    &.new {
      background: transparent;
      border: 2px dashed ${theme.gray._500};
    }
    
`;