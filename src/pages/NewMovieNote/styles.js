import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  height: 100vh;
`
export const Content = styled.main`
  margin-top: 4rem;
  padding-inline: 12.3rem;
  > h2 {
    margin-top: 4rem;
    font-size: 3.6rem;
    font-weight: 500;
  }
`
export const Form = styled.form`
  margin-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .input-wrapper {
    display: flex;
    gap: 4rem;
  }
  h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${theme.gray._400};
    margin-bottom: 1.2rem;
  }
`;
export const TagsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: stretch;
  padding: 1.6rem 5.6rem;
  border-radius: 1rem;
  background-color: ${theme.gray._900};
  flex-wrap: wrap;
`;

export const ButtonsWrapper = styled.div`
`