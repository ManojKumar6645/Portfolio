import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, src }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={src} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: "#fff"}}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="image7"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
