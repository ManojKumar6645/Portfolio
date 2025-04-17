import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Github } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <HashLink to='#home' style={{ textDecoration: "none", color: "#fff" }}>
              <h2 style={{ fontFamily: 'monospace san-serif', marginTop: '2rem', fontStyle: 'oblique', fontSize: '2rem' }}>Manoj</h2>
            </HashLink>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-5" >
              <a href="https://www.linkedin.com/in/manoj-kumar-4b38b4244/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ManojKumar6645" target="_blank" rel="noreferrer"><Github className="hii" style={{ color: "#fff" }} /></a>
              <a href="https://www.instagram.com/mano_jkumar6052/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p><span className="fw-bold">Call</span>: +91 8874856645</p>
            <p><span className="fw-bold">Email</span>: manojkumar65927@gmail.com</p>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
