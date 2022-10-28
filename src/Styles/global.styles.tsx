import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --font-size-title: 2.5rem;
    --font-size-subTitle: 1.5rem;   
    --font-size-card-Title: 1rem;
    --font-size-card-subTitle: .8rem;
    --font-size-navTitle: 1.3rem;
    --font-size-info: 1rem;
    --font-color-title: black; // 간단하게 white로 설정했지만, 보통은 rgb값이나 hex값으로 설정합니다.
    --font-color-subTitle: #7a7b85;
    --font-color-feature: white;
    --main-background-color: #f4f6f8;
  }

  
`;
