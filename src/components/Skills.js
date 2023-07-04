import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingprogressProvider";
import {
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here you'll find a showcase of my diverse range of skills and expertise. It highlights the specific talents and proficiencies that make me a valuable asset in my field. I am proficient in C++ programming language and have good knowledge of Data Structures and Algorithms.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/*C/C++*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 80]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>C/C++</h5>
                            </div>
                            {/*React*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 60]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>React</h5>
                            </div>
                            {/*HTML*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 70]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Html</h5>
                            </div>
                            {/*CSS*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 60]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Css</h5>
                            </div>
                            {/*Javascript*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 60]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Javascript</h5>
                            </div>
                            {/*Node*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 60]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Node</h5>
                            </div>
                            {/*ExpressJs*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 50]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>ExpressJs</h5>
                            </div>
                            {/*Bootstrap*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 70]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Bootstrap</h5>
                            </div>
                            {/*MongoDb*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 50]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>MongoDb</h5>
                            </div>
                            {/*Git and Github*/}
                            <div className="item">
                              <ChangingProgressProvider values={[0, 75]}>
                                {percentage => (
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={20}
                                    styles={buildStyles({
                                      backgroundColor: "#151515",
                                      textColor: "#fff",
                                      textSize: "0.8rem",
                                      pathColor: "#863494",
                                      trailColor: "transparent",
                                      pathTransitionDuration: 1
                                    })}
                                  />
                                )}
                              </ChangingProgressProvider>
                              <h5 style={{fontFamily: 'sans-serif'}}>Git and Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  )
}
