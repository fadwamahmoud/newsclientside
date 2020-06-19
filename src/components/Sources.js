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
const Sources = ({ sources, handleSubscribe, handleUnsubscribe }) => {
  return (
    <Container>
      <div>
        {sources.map((source) => {
          return (
            <Card key={source.id}>
              <CardBody>
                <Row>
                  <Col>
                    <CardTitle>
                      <h3>{source.name}</h3>
                    </CardTitle>
                  </Col>
                  <Col></Col>
                </Row>

                <CardText>
                  <h5>{source.description}</h5>
                </CardText>
                {/* <CardText>{source.url}</CardText> */}
                <CardText>
                  {" "}
                  <h5>Category: {source.category}</h5>
                </CardText>
              </CardBody>
              {/* <CardFooter>{source.url}</CardFooter> */}
              <CardFooter>
                <Button
                  className={
                    source.status ? "btn btn-warning" : "btn btn-default"
                  }
                  onClick={
                    source.status
                      ? () => handleSubscribe(source.id, "unsubscribe")
                      : () => handleSubscribe(source.id, "subscribe")
                  }
                >
                  {source.status ? "Unsubscribe" : "Subscribe"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Sources;
