import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  gap: .8rem;
  min-width: 18rem;
  justify-content: space-between;
  `;
export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  > strong {
    font-size: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
`;
export const Logout = styled.button`
  width: 100%;
  font-size: 1.4rem;
  text-align: right;
  color: ${theme.gray._300};
  background-color: transparent;
`;