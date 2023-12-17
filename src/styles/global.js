import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";
export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: "Roboto Slab", 'Courier New', Courier, monospace;
    color: ${theme.gray._100};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${theme.gray._800};
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  a {
    text-decoration: none;
  }
  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }
  button:hover, a:hover{
    filter: brightness(.9);
  }
  input, button, textarea {
    border: none;
    outline: none;
  }
`;