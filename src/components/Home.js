import styled from "styled-components";
import img from "../assets/about.jpg";


const Home = () => {
    return (
        <Main id="home">
            <Text>
                {/* <h3>Full Stack Developer</h3> */}
                <h1>
                  Hi !<br></br> I'm <span>Negar </span>,
                  <br></br>A web developer.
                </h1>
            </Text>
            <Img src={img} alt="Negar" />
        </Main>
    );
};


const Text = styled.div`
    margin-top: 12%;
    position: absolute;
    max-width: 50%;
    h1 {
        margin-top: 6%;
    }
    span {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
    @media screen and (max-width: 1000px) {
        max-width: 50%;
    }
    @media screen and (max-width: 500px) {
        max-width: 50%;
        h3 {
            font-size: 14px;
            min-width: 200px;
        }
    }
`;
const Main = styled.div`
    width: 100%;
    height: 95vh;
    position: relative;
    @media screen and (max-width: 1100px) {
        height: 70vh;
    }
    @media screen and (max-width: 820px) and (max-height: 1200px) {
        height: 45vh;
    }
    @media screen and (max-width: 500px) {
        height: 30vh;
    }
`;

const Img = styled.img`
    margin-top: 8%;
    max-width: 30%;
    border-radius: 6%;
    position: absolute;
    right: 8%;
    animation: 2s ease-out 1s 1 slideInRight;
    @keyframes slideInRight {
        0% {
            transform: translateX(60%);
            opacity: 0.1;
        }
        100% {
            transform: translateX(0);
        }
    }
    @media screen and (max-width: 1000px) {
        max-width: 40%;
        right: 0%;
    }
    @media screen and (max-width: 600px) {
        margin-top: 10%;
    }
`;

export default Home;