import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
  padding: 3rem 12.3rem;
  border-bottom: 1px solid ${theme.gray._500};
`;