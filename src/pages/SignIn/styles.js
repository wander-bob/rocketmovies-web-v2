import styled from "styled-components";
import background from "../../assets/background.png";
import { theme } from "../../styles/theme";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 13.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .8rem;
  > h1 {
    font-size: 4.8rem;
    color: ${theme.pink._500};
  }
  > p {
    font-size: 1.4rem;
    color: ${theme.gray._300};
    margin-bottom: 2.4rem;
  }
  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: 2.4rem;
  }
  > a {
    width: 100%;
    margin-top: 2.4rem;
    color: ${theme.pink._500};
    text-align: center;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat;
  background-size: cover;
`;