import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <h1 className="h1">Proficiency</h1>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
