import React from "react";
import { postList } from "../posts";
import { Container, Row } from "reactstrap";
import BlogCard from "../components/BlogCard";
import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    postList && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {postList.map((data, i) => {
                return <BlogCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Blog;
