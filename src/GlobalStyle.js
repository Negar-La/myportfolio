import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {
  --header-height: 3rem;
  --hue: 0;
  --sat: 0%;
  --title-color:hsl(var(--hue), var(--sat), 20%);
  --title-color-dark:hsl(var(--hue), var(--sat), 0%);
  --text-color:hsl(var(--hue), var(--sat), 46%);
  --title-color:hsl(var(--hue), var(--sat), 98%);
  --container-color: #fff;

  --body-font: "Poppins", sans-serif;
  /* 1rem = 16px */
  --big-font-size: 3.5rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;
  --tiny-font-size: 0.625rem;

  /* font weight */
  --font-normal: 400;
  --font-medium: 500;
  --font-semi-bold: 600;

  /* margins bottom  */
  --mb-0-25: 0.25rem; 
  --mb-0-5: 0.5rem; 
  --mb-0-75: 0.75rem; 
  --mb-1: 1rem; 
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /* z index */
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}


@media screen and (max-width: 992px) {
    :root {
        --big-font-size: 2.75rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1rem;
        --normal-font-size: 0.938rem;
        --small-font-size: 0.813rem;
        --smaller-font-size: 0.75rem;
    }
}

/* ======Base====== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body,
button,
input,
textarea {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
}

body {
    background-color: var(--body-color);
    color: var(--text-color);
}

h1, h2, h3 {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    border: none;
    outline: none;
}

img {
    max-width: 100%;
    height: auto;
}

/* ======Reusable CSS classes====== */
.section {
    padding: 6rem 0 2rem;
}

.section__title {
    font-size: var(--h1-font-size);
    color: var(--title-color);
}

.section__subtitle {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: 4rem;
}

.section__title,
.section__subtitle {
    text-align: center;
}

/* ======Layout====== */
.container {
    max-width: 968px;
    margin-left: auto;
    margin-right: auto;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

/* ======Buttons====== */
.button {
    display: inline-block;
    background-color: var(--title-color);
    color: var(--container-color);
    padding: 1.25rem 2rem;
    border-radius: 1rem;
    font-weight: var(--font-medium);
}

.button:hover {
    background-color: var(--title-color-dark);
}

.button__icon {
    margin-left: var(--mb-0-5);
}

.button--flex {
    display: inline-flex;
    align-items: center;
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