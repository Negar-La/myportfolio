import styled from 'styled-components';

const Cube = () => {
  return (
    <StageCubeCont>
      <Cubespinner>
        <Face1>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />
        </Face1>
        <Face2>
          <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" />
        </Face2>
        <Face3>
          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="mysql" />
        </Face3>
        <Face4>
          <img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" alt="Java" />
        </Face4>
        <Face5>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
        </Face5>
        <Face6>
          <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="javascript" />
        </Face6>
      </Cubespinner>
    </StageCubeCont>
  );
};

const StageCubeCont = styled.div`
  width: 40%;
  height: 100%;
  top: 100%;
  padding-top: 18%;
  margin-left: 0;
  position: absolute;
  left: 0;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: 50%;
    top: 90%;
    left: -4%;
  }
  @media screen and (max-width: 820px) {
    top: 60%;
    height: 140%;
    padding-top: 20%;
  }
  @media screen and (max-width: 700.01px) {
    top: 147%;
    left: 12%;
    width: 80%;
    padding-top: 14%;
  }
  @media screen and (max-width: 500.01px) {
    top: 147%;
    left: 12%;
    width: 80%;
    padding-top: 14%;
  }
  @media screen and (max-width: 389px) {
    top: 170%;
    left: 12%;
    width: 80%;
    padding-top: 14%;
  }
`;

const Cubespinner = styled.div`
  animation-name: spincube;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);

  img {
    width: 70%;
  }

  div {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px lightyellow;
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateX(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`;

const Face1 = styled.div`
  transform: translateZ(100px);
  color: #dd0031;
`;

const Face2 = styled.div`
  transform: rotateY(90deg) translateZ(100px);
  color: #f06529;
`;

const Face3 = styled.div`
  transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
  color: #28a4d9;
`;

const Face4 = styled.div`
  transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
  color: #5ed4f4;
`;

const Face5 = styled.div`
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
  color: #efd81d;
`;

const Face6 = styled.div`
  transform: rotateX(-90deg) translateZ(100px);
  color: #ec4d28;
`;

export default Cube;
