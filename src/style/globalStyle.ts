import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    & button {
      cursor: pointer;
    }
  }

  #root {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: rgba(167, 159, 159, 0.5);
  }
`;
