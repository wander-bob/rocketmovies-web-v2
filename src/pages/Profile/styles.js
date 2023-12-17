import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  display: grid;
`
export const Header = styled.header`
  height: 14rem;
  padding-inline: 12.3rem;
  display: flex;
  align-items: center;
  background-color: ${theme.pink._400};
`
export const Avatar = styled.div`
  position: relative;
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 16rem;
  max-height: 16rem;
  > img {
      width: 18.5rem;
      height: 18.5rem;
      border-radius: 50%;
    }
  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${theme.pink._500};
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -1.6rem;
    right: -1.6rem;
    input {
      display: none;
    }
    svg {
      stroke: ${theme.gray._800};
      font-size: 2rem;
    }
    
  }
`
export const ProfileSettings = styled.form`
  min-width: 48rem;
  margin-inline: auto;
  margin-top: -4rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  > div {
    &:nth-child(3){
      margin-top: 1.6rem;
    }
  }
  > button {
    margin-top: 1.6rem;
  }
`