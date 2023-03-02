import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "./MenuContext";


const Menu = () => {

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <Wrapper open={openMenu}>
            <Item>
                <a href="#" onClick={() => setOpenMenu(!openMenu)}>Home</a>
            </Item>
            <Item>
                <a href="#about" onClick={() => setOpenMenu(!openMenu)}>About</a>
            </Item>
            <Item>
                <a href="#portfolio" onClick={() => setOpenMenu(!openMenu)}>Projects</a>
            </Item>
            <Item>
                <a href="#contact" onClick={() => setOpenMenu(!openMenu)}>Contact</a>
            </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  visibility: hidden;
  /* changing position from absolute to fixed so when you scroll down it works properly */
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30px;
  right: 2px;
  border-radius: 5px;

  @media (max-width: 600px) {
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
  }
`;

const Item = styled.div`
  color: blue;
  width: 100px;
  padding: 5%;
  text-decoration: none;
  text-align: center;
  padding-top: 10px;
  font-size: 1rem;
  &:hover {
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
`;


export default Menu;