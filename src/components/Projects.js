import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PersonWorkspace, MortarboardFill } from 'react-bootstrap-icons'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdWork } from 'react-icons/md';

export const Projects = () => {

  const codingProfiles = [
    { platform: 'LinkedIn', icon: <CiLinkedin fontSize={'4.5rem'} />, src: 'www.linkedin.com/in/manoj-kumar-4b38b4244', username: 'Manoj Kumar' },
    { platform: 'Instagram', icon: <FaInstagram fontSize={'4.5rem'} />, src: "https://www.instagram.com/mano_jkumar6052/", username: 'mano_jkumar6052' },
    { 
      platform: 'Naukri', 
      icon: <MdWork fontSize={'4.5rem'} />, 
      src: "https://www.naukri.com/mnjuser/profile?id=&altresid", 
      username: 'Manoj Kumar' 
    },
    
    { platform: 'Github', icon: <FaGithubSquare fontSize={'4.5rem'} />, src: "https://github.com/ManojKumar6645", username: 'Manojkumar6645' },
  ];

  const experiences = [
    {
      year: 'January 2025 - Present',
      title: 'Software Engineer @Salgem Infoigy Tech Pvt Ltd',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Actively involved in the development of various software applications, including critical government solutions and innovative commercial projects, ensuring compliance with diverse requirements and standards.</li>
          <li>Collaborated with stakeholders from various sectors, including government agencies and private organizations, to gather requirements, align project objectives, and deliver tailored software solutions that meet diverse user needs.</li>
          <li>Applied industry best practices in software development, including agile methodologies and quality assurance processes, to enhance project efficiency and ensure high-quality deliverables across all projects.</li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: 'May 2024 - December 2024 (7 months)',
      title: 'SDE Intern @Salgem Infoigy Tech Pvt Ltd',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Gained hands-on experience in software development through real-world projects.</li>
          <li>Contributed to the design, implementation, and optimization of key software solutions.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality outcomes.</li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: 'January 2024 - April 2024 ',
      title: 'SDE Intern @KSoft Vision',
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Designed and developed dynamic websites and desktop applications using .NET technologies, ensuring robust functionality and user-friendly interfaces.</li>
          <li>Implemented efficient backend systems with SQL Server, enhancing data management and application performance.</li>
          <li>Gained hands-on experience in building scalable and reliable solutions through practical training.</li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    { year: '2021 - 2024', title: 'Dr. Bhimrao Ambedkar University(Central) Lucknow', description: 'Bachelor of Science (Information Technology)', icon: <MortarboardFill /> }
  ];

  const projects = [
  //   {
  //      title: "IAS Gaon – Institute E-Learning Website",
  // description: "A dedicated e-learning web platform built for the IAS Gaon institute to deliver their exclusive courses online. Developed using React for the frontend and Node.js for the backend, the platform allows students to easily access video lectures, course materials, and structured learning paths designed by the institute. Optimized for both desktop and mobile users.",

  //   },
  //   {
  //     title: "Medical Shop Management Desktop App",
  // description: "A robust desktop application designed to streamline the management of medical shops. Developed using C# and WinForms, this app helps manage inventory, sales, purchases, stock levels, and customer information. It provides easy access to product details, pricing, and stock alerts, making it a must-have tool for small and medium-sized pharmacies to enhance their operational efficiency.",
  
  //   },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Work</h2>
                  <p>Throughout my journey as a Software Engineer, I have developed a diverse skill set focused on designing, building, and optimizing reliable software solutions. My projects demonstrate my ability to transform complex requirements into practical, high-quality applications that drive efficiency and deliver measurable results.</p>                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: "pointer" }}>Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ cursor: "pointer" }}>Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ cursor: "pointer" }}>Profiles</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                        <Container className='m-5 p-5'>
                          <VerticalTimeline>
                            {experiences.map((experience, index) => (
                              <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element"
                                contentStyle={{ background: 'white', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '25px solid  #f4f4f4' }}
                                date={experience.year}
                                iconStyle={{ background: '#383838', color: '#fff' }}
                                icon={experience.icon}
                              >
                                <h3 className="vertical-timeline-element-title d-flex justify-content-center text-muted">{experience.title}</h3>
                                <span className='d-flex h5 justify-content-around m-4 text-muted'>{experience.description}</span>
                              </VerticalTimelineElement>
                            ))}
                          </VerticalTimeline>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className='justify-content-center'>
                          <Row className="justify-content-center">
                            {codingProfiles.map((profile, index, src) => (
                              <Col key={index} xs={6} sm={3}>
                                <div className="profile m-8 d-flex justify-content-center align-items-center flex-column">
                                  <a href={profile.src} target="_blank" rel="noreferrer">
                                    <div className="icon m-2 text-light">{profile.icon}</div>
                                  </a>
                                  <div className="platform m-2">{profile.platform}</div>
                                  <div className="username m-2">{profile.username}</div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="image6" src={colorSharp2}></img>
    </section>
  )
}
