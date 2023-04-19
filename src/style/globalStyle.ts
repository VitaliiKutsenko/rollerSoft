import { createGlobalStyle } from 'styled-components';

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
    min-width: 85%;
    height: 100%;
    margin: 0 auto;
    }
`;
