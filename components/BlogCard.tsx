import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col} from "reactstrap";
import { BlogType } from "../types/sections";

const BlogCard = ({ title, intro, image_url, link, date }: BlogType) => {
    return (
      <Col lg="6">
        <a href={link}>
            <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
                <img alt={title} src={image_url}></img>
                <CardBody className="">
                    <CardTitle tag="h4" className="mb-2">
                    {title}
                    </CardTitle>
                    <CardSubtitle>{date.toLocaleDateString()}</CardSubtitle>
                    <CardText tag="div" className="description my-3 text-left">
                    {intro}
                    </CardText>
                </CardBody>
            </Card>
        </a>
      </Col>
    );
  };
  
  export default BlogCard;