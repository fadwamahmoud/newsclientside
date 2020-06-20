import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
const Carousell = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=bbc-news`, {
        headers: { "X-Api-Key": "45b7e93a7b644836a0fb6abc2e6bb278" },
      })
      .then(({ data }) => {
        setFeaturedNews(data.articles);
      });
  });
  return (
    <Col className="mt-lg-4">
      <Carousel>
        {featuredNews &&
          featuredNews.map((article) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={article.urlToImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{article.author}</h3>
                <p>{article.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <img
        alt="..."
        className="shapes triangle"
        src={"./assets/img/triunghiuri.png"}
        style={{ height: "300px" }}
      />
      <img
        alt="..."
        className="shapes squares"
        src={"./assets/img/patrat.png"}
        style={{ height: "300px" }}
      />
    </Col>
  );
};

export default Carousell;
