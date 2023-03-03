import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";


const Navbar = () => {

    return (
        <Container>
            <h1>Negar</h1>
            <Div>
                <Link href="#">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </Div>
            <NavbarMenu>
            <BurgerMenu  />
            </NavbarMenu>
        </Container>
    );
};

const NavbarMenu = styled.div`
    margin-left: 1rem;
    display: none;
    position: relative;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;
const Link = styled.a`
    position: relative;
    &::after {
        content: "";
        width: 0%;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: 0.5s;
        background: var(--gradient-bar);
    }
    &:hover::after {
        width: 100%;
    }
`;
const Div = styled.div`
    display: flex;
    gap: 2.6em;
    @media screen and (max-width: 800px) {
        gap: 2em;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
const Container = styled.div`
    padding: 1% 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: var(--background-color);
    width: 100vw;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    h1 {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
`;

export default Navbar;