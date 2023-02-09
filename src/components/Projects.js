import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pacman from "../assets/img/pacman.png";
import todoList from "../assets/img/todolist.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
        title: "Pac-Man Clone",
        description: "A basic clone of Pac-Man using HTML, CSS, and JavaScript.",
        imgUrl: pacman,
        },
        {
        title: "To-Do List",
        description: "To-Do List using HTML, CSS, and JavaScript with full CRUD capabilities.",
        imgUrl: todoList,
        },
        {
        title: "Virtual Keyboard",
        description: "A fully-functioning virtual keyboard that also allows for customization!",
        imgUrl: projImg3,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: pacman,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: todoList,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p>These are various projects I've worked on of varying degrees of difficulty! This website is TECHNICALLY one of them, but these are other things I've done such as a Pac-Man clone, a virtual keyboard, a to-do list, and more!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
    }