import styled from 'styled-components';
import Cube from './Cube';
import Experience from './Experience';
import AnimatedLetters from './AnimatedLetters';

const About = () => {
  const sentence = 'About Me.'.split('');

  return (
    <Main>
      <Anchor>
        <span id="about"></span>
      </Anchor>
      <Row>
        <Col1>
          <Cube />
        </Col1>
        <Col2>
          <Title>
            {sentence.map((letter, index) => {
              return <AnimatedLetters key={index}>{letter === ' ' ? '\u00A0' : letter}</AnimatedLetters>;
            })}
          </Title>
          <p>I'm always curious to learn new things and enjoy dealing with issues that require extensive research and brainstorming. I love programming because it allows me to create my own world and is filled with challenges.</p>
          <p>
            Loving both front-end and back-end coding, my knowledge of modern web development includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>ES6 JavaScript</strong> and <strong>React</strong> on the front-end, and <strong>Node.js</strong>, <strong>Express.js</strong> and <strong>MongoDB</strong> on the back-end. Additionally, I'm exploring <strong>Java</strong> for backend development, <strong>MySQL</strong> for database management, and <strong>Spring Boot</strong> for building robust applications. I also have experience with <strong>WordPress</strong> for content management, <strong>Tailwind CSS</strong> for styling, and <strong>Figma</strong> for design prototyping.
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
  @media screen and (max-width: 820.01px) {
    height: 130vh;
  }
  @media screen and (max-width: 700px) {
    height: 170vh;
  }
  @media screen and (max-width: 500px) {
    height: 190vh;
  }
  @media screen and (max-width: 380px) {
    height: 210vh;
  }
`;

export default About;
