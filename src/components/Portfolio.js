import styled from "styled-components";
import project1 from "../assets/book-appS.jpg";
import project2 from "../assets/food-appS.jpg";
import project3 from "../assets/dad-joke-appS.jpg";
import project4 from "../assets/react-note-appS.jpg";
import {AiOutlineGithub} from "react-icons/ai";
import {FiExternalLink} from "react-icons/fi";

const Portfolio = () => {
    return (
        <Main>
            <Anchor>
                <span id="portfolio"></span>
            </Anchor>
            <div>
                <h1>My Work.</h1>
                <WorkList>
                    <Work>
                        <Img src={project1} />
                        <Layer>
                            <h2>Online Library</h2>
                            <Description>
                            A Full-stack MERN App that you can search for books by category, title or author. 
                            </Description>
                            <a href="https://github.com/Negar-La/Final-project" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={28} /><div>Code</div>
                            </a>
                            <a href="https://my-online-library.onrender.com/" target="_blank" rel="noreferrer">
                                <FiExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project2} />
                        <Layer>
                            <h2>Find your Food</h2>
                            <Description>
                            A Full-stack MERN App for surfing the meals and get connected with cook (a live chat system).
                            </Description>
                            <a href="https://github.com/Negar-La/Find-your-Food" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={28} /><div>Code</div>
                            </a>
                            <a href="https://find-your-food.onrender.com/" target="_blank" rel="noreferrer">
                                <FiExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project3} />
                        <Layer>
                            <h2>Dad Jokes </h2>
                            <Description>
                            A Dad Jokes Generator project with Feedback UI using HTML, CSS, and JavaScript.
                            </Description>
                            <a href="https://github.com/Negar-La/Dad-Jokes-Generator" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={28} /><div>Code</div>
                            </a>
                            <a href="https://dad-jokes-negar-la.vercel.app/" target="_blank" rel="noreferrer">
                                <FiExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                    <Work>
                        <Img src={project4} />
                        <Layer>
                            <h2>React Notes App</h2>
                            <Description>
                            A modern responsive react notes app
                            </Description>
                            <a href="https://github.com/Negar-La/React-Notes-App" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={28} /><div>Code</div>
                            </a>
                            <a
                                href="https://react-notes-app-8uii.onrender.com/" target="_blank" rel="noreferrer">
                                <FiExternalLink size={28} /><div>Demo</div>
                            </a>
                        </Layer>
                    </Work>
                </WorkList>
            </div>
        </Main>
    );
};
const Anchor = styled.h2`
    position: relative;
    #portfolio {
        position: absolute;
        left: 0;
        top: -90px;
        height: 0;
        width: 0;
    }
`;
const Description = styled.p`
    font-size: 14px;
    margin: 20px 0;
    font-weight: 500;
    @media screen and (max-width: 1250px) {
        font-size: 12px;
    }  
    @media screen and (max-width: 900px) {
        font-size: 14px;
    } 
    @media screen and (max-width: 600px) {
        font-size: 11px;
    }   
    @media screen and (max-width: 500px) {
        font-size: 12px;
    } 
`;
const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), #450576e3);
    border-radius: 20px;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
    transition: height 0.8s;
    div {
        font-size: 0.8rem;
        line-height: 0.6;
    }
    a {
        color: transparent;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 1250px) {
        h2 {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 1000px) {
        h2 {
            font-size: 0.8em;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 900px) {
        h2 {
            font-size: 1.4em;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 700px) {
        h2 {
            font-size: 0.9em;
        }
        a {
            margin-bottom: 20px;
        }
    }
`;
const Img = styled.img`
    width: 100%;
    border-radius: 20px;
    display: block;
    transition: transform 0.7s;
`;
const Work = styled.div`
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 0px 2px 3px rgba(255, 255, 255, 0.477);
    &:hover img {
        transform: scale(1.3);
    }
    &:hover div {
        height: 100%;
    }
    &:hover a {
        display: block;
        color: white;
    }
    @media screen and (max-width: 500px) {
        margin-bottom: 6%;
    }
`;
const WorkList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-gap: 4%;
    margin-top: 4%;
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
        grid-gap: 6%;
    }
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;
const Main = styled.div`
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 1100px) {
        height: 70vh;
    }
    @media screen and (max-width: 900px) {
        h1 {
            padding-bottom: 2%;
        }
        height: auto;
    }
`;

export default Portfolio;