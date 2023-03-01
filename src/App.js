import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Menu from "./components/Menu";


const App = () => {
  return (
      <>
          <GlobalStyle />
          <Navbar />
          <Div>
              <Home />
              <About />
              <Portfolio />
              <Contact />
          </Div>
          <Menu />
      </>
  );
};

const Div = styled.div`
  padding: 0 10%;
`;
export default App;