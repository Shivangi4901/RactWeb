import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html{
  font-size: 62.5%; /* 10px */
  overflow-x: hidden;
}
h1{
  color: ${({ theme }) => theme.colors.heading};
  font-size: 5rem;
  font-weight: 900;
}
h2{
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  text-align: center;

}
`;
