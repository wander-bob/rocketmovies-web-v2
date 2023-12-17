import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Container = styled(Link)`
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.gray._500};
  > img {
    height: 6.4rem; 
    width: 6.4rem;
    border-radius: 50%;
    
  }
`;
