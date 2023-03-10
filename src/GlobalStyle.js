import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import 'animate.css';

:root {
    --gradient-text: -webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    --font-color: rgba(255, 255, 255, 0.87);
    color: var(--font-color);
    --background-color: #11081b;
    background-color: var(--background-color);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

button {
    margin-top: 2%;
    width: fit-content;
    box-shadow: 0 0 0 1px #9000ffad  ;
    padding: 12px 60px;
    border-radius: 10px;
    font-weight: 500;
    color: var(--font-color);
    background: var(--background-color);
    font-size: 16px;
    transition: 0.8s;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        padding: 10px 40px;
    }
}
button:hover {
    background: var(--gradient-bar);
    box-shadow: 0 0 0 1px var(--gradient-bar);
}
a {
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--font-color);
    text-decoration: inherit;
    @media screen and (max-width: 700px) {
        font-size: 1em;
    }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    overflow-x: hidden;
}
h1 {
    font-size: 2.4em;
    line-height: 1.1;
    @media screen and (max-width: 800px) {
        font-size: 1.7em;
    }
    @media screen and (max-width: 700px) {
        font-size: 1.4em;
    }
    @media screen and (max-width: 500px) {
        font-size: 1.1em;
    }
}
h2 {
    font-size: 1.3em;
    letter-spacing: 1px;
}
h3 {
    letter-spacing: 1px;
}
body::-webkit-scrollbar {
    width: 0.8em;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px white;
}

body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px white;
    border-radius: 10px;
}
`;
export default GlobalStyle;