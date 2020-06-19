import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  CardImg,
  Alert,
} from "reactstrap";
const Articles = ({ articles }) => {
  return (
    <>
      {articles.length > 0 && (
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
                        <CardImg alt="" src={article.urlToImage}></CardImg>
                      </Col>
                      <Col>
                        <CardText>
                          <h4>{article.content}</h4>
                        </CardText>
                        <CardText>
                          <h4>{article.description}</h4>
                        </CardText>
                        <Button>
                          <a alt="" href={article.url}>
                            Read more
                          </a>
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>{article.publishedAt}</CardFooter>
                  <CardFooter>{article.author}</CardFooter>
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
