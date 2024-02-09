import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import {Button} from "reactstrap";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">Discuss a project or just want to say hi? Get the conversation started!</p>
              <p className="text-white">Thank you to Hanzla Tauqeer for his great portfolio template!</p>
              <Button
                  className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                  color="default"
                  href="https://github.com/1hanzla100"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-file" />
                  </span>
                  <span className="btn-inner--text">Check out Hanzla&apos;s Work</span>
                </Button>
              <p className="text-white mt-3">{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
