import styled from "styled-components";
import Cube from "./Cube";
import Experience from "./Experience";
import AnimatedLetters from "./AnimatedLetters";


const About = () => {

    const sentence = "About Me.".split("");

    return (
        <Main>
            <Anchor>
                <span id="about"></span>
            </Anchor>
                <Row>
                    <Col1>
                        <Cube/>
                    </Col1>
                    <Col2>
                        <Title>
                        {sentence.map((letter, index)=>{
                            return (
                        <AnimatedLetters key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </AnimatedLetters>
                            )
                         })}
                        </Title>
                        <p>
                        I'm always curious to learn new things and enjoy dealing with issues that require extensive research and brainstorming.
                        I love programming because it allows me to create my own world and is filled with challenges. 
                        Loving both front-end and back-end coding and interested in learning new technologies, languages, frameworks and methods, 
                        my knowledge of modern web development includes HTML, CSS, ES6 JavasScript and React on the front-end, and NodeJS, ExpressJS and MongoDB on the back-end.
                        </p>
                        <div>
                            <Experience />
                        </div>
                    </Col2>
                </Row>
        </Main>
    );
};


const Anchor = styled.h2`
    position: relative;
    #about {
        position: absolute;
        left: 0;
        top: -120px;
        height: 0;
        width: 0;
        @media screen and (max-width: 500px) {
            top: -60px;
    }
    }
`;

const Title = styled.h1`
    padding-bottom: 2%;
    span {
        display: inline-block;
    }
`;
const Col2 = styled.div`
    flex-basis: 60%;
    p {
        color: #ababab;
        text-align: justify;
        line-height: 1.2;
    }
    @media screen and (max-width: 1000px) {
        p {
            font-size: 14px;
            line-height: 1.3;
        }
    }
    @media screen and (max-width: 800px) {
        flex-basis: 55%;
        p {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 700px) {
        flex-basis: 100%;
        text-align: left;
        p {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 500px) {
        p {
            font-size: 12px;
        }
    }
`;
const Col1 = styled.div`
    flex-basis: 35%;
    @media screen and (max-width: 800px) {
        flex-basis: 40%;
    }
    @media screen and (max-width: 700px) {
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Main = styled.div`
    width: 100%;
    height: 120vh;
    @media screen and (max-width: 1100px) {
        height: 130vh;
    }
    @media screen and (max-width: 820.01px)  {
        height: 90vh;
    }
    @media screen and (max-width: 700px)  {
        height: 110vh;
    }
    @media screen and (max-width: 500px) {
        height: 140vh;
    }
    @media screen and (max-width: 380px) {
        height: 180vh;
    }
`;

export default About;