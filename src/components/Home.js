import styled, {keyframes} from "styled-components";
import img from "../assets/001--.jpg";
import AnimatedLetters from "./AnimatedLetters";


const Home = () => {

    const sentence = "Hi !".split("");
    const sentence2 = "I'm Negar,".split("");
    const sentence3 = "Full Stack Developer".split("");
    return (
        <Main id="home">
            <Text>
                <h1>
                  {sentence.map((letter, index)=>{
                    return (
                        <AnimatedLetters key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimatedLetters>
                    )
                  })}
                  <br></br>
                  {sentence2.map((letter, index)=>{
                    return (
                        <AnimatedLetters key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimatedLetters>
                    )
                  })}
                           <br></br>
                  {sentence3.map((letter, index)=>{
                    return (
                        <AnimatedLetters key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimatedLetters>
                    )
                  })}
                </h1>
            </Text>
            <Img src={img} alt="Negar" />
        </Main>
    );
};

const animation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

const Text = styled.div`
    margin-top: 12%;
    position: absolute;
    max-width: 50%;
    h1 {
        margin-top: 6%;
      
    }
    span {
        font-weight: 800;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 4s;
        animation-fill-mode: forwards;
        display: inline-block;
    }
    @media screen and (max-width: 1000px) {
        max-width: 55%;
        font-size: 0.84rem;
    }
    @media screen and (max-width: 500px) {
        max-width: 52%;
        h3 {
            font-size: 14px;
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
        height: 40vh;
    }
`;

const Img = styled.img`
    margin-top: 8%;
    max-width: 35%;
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