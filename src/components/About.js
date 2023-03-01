import styled from "styled-components";
import Cube from "./Cube";
import Experience from "./Experience";

const About = () => {
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
                        <Title>About Me.</Title>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. 
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
    }
`;

const Title = styled.h1`
    padding-bottom: 2%;
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
    height: 100vh;
    @media screen and (max-width: 1100px) {
        height: 130vh;
    }
    @media screen and (max-width: 820.01px)  {
        height: 80vh;
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