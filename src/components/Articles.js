import React from "react";
import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";
const Articles = ({ articles }) => {
  const formatDate = (unformattedDate) => {
    const d = new Date(unformattedDate).toDateString();

    return d;
  };
  return (
    <>
      {articles && (
        <Container>
          <div>
            {articles.map((article) => {
              return (
                <Card>
                  <CardBody>
                    <CardTitle>
                      <h2>{article.title}</h2>
                    </CardTitle>
                    <Row>
                      <Col>
                        <CardImg
                          alt={"no image available"}
                          src={article.urlToImage}
                        ></CardImg>
                      </Col>
                      <Col>
                        <CardText>
                          <h4>{article.content}</h4>
                        </CardText>
                        <CardText>
                          <h4>{article.description}</h4>
                        </CardText>
                        <Button className="btn-neutral" color={"primary"}>
                          <a alt="" href={article.url}>
                            Read more
                          </a>
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>

                  <CardFooter>
                    <div className="text-info">
                      <FontAwesomeIcon
                        style={{ marginRight: "10px" }}
                        icon={faNewspaper}
                      ></FontAwesomeIcon>
                      {formatDate(article.publishedAt)}
                    </div>

                    <div className="text-info">
                      <FontAwesomeIcon
                        style={{ marginRight: "10px" }}
                        icon={faUser}
                      ></FontAwesomeIcon>
                      {article.author}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      )}
    </>
  );
};

export default Articles;
