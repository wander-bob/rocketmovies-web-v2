import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-inline: 8rem;
  gap: 2.4rem;
  > h2{
    color: ${theme.gray._300};
  }
`