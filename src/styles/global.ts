import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;

  --color-background: #F0F0F7;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #8257E5;
  --color-primary-dark: #774DD6;
  --color-primary-darker: #6842C2;
  --color-secundary: #04D361;
  --color-secundary-dark: #04BF58;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-button-disable: #DCDCE5;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(--color-background);
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

@media (min-width: 768px) {
  :root {
    font-size: 62.5%;
  }
}
`;