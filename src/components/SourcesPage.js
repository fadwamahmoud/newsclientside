/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";
// reactstrap components
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

// core components
import ExamplesNavbar from "./ExamplesNavbar.js";
import Carousel from "./Carousel";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import Tabs from "./Tabs.js";
import Sources from "./Sources";

class SourcesPage extends React.Component {
  state = {
    sources: [],
  };
  componentDidMount() {
    const getNews = async () => {
      axios
        .get(`${process.env.URL}/user/sources`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          console.log(data);
          this.setState({ sources: data });
        })
        .catch((err) => {
          console.log("news request error" + err);
        });
    };
    getNews();
  }
  handleSubscribe = async (sourceId, action) => {
    // variable action is either subscribe or unsubscribe
    axios
      .patch(`${process.env.URL}/user/${action}/${sourceId}`, null, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        //clone
        const newSources = [...this.state.sources];

        //find source to edit
        const source = this.state.sources.filter(
          (source) => source.id === sourceId
        )[0];
        const index = newSources.indexOf(source);

        //edit
        source.status = !source.status;
        newSources[index].state = !newSources[index].state;
        //set state
        this.setState({ sources: newSources });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleUnsubscribe = async (sourceId) => {
    await axios
      .patch(`${process.env.URL}/user/unsubscribe/${sourceId}`, null, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <img alt="..." className="path" src={"./assets/img/path4.png"} />
          <div
            class="card card-nav-tabs card-plain"
            style={{
              paddingTop: "30vh",
              paddingLeft: "10vw",
              paddingRight: "10vw",
            }}
          >
            <Row>
              <Col></Col>
              <Col>
                <Carousel />
              </Col>
            </Row>
            <Tabs {...this.props}></Tabs>
          </div>
          <section className="section section-lg">
            <section
              className="section"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0px",
              }}
            >
              {this.state.sources.length > 0 ? (
                <Sources
                  handleSubscribe={this.handleSubscribe}
                  handleUnsubscribe={this.handleUnsubscribe}
                  sources={this.state.sources}
                ></Sources>
              ) : (
                <div
                  style={{
                    width: "60vw",
                  }}
                  class="alert alert-danger"
                  role="alert"
                >
                  Loading.....
                </div>
              )}
            </section>
          </section>

          {/* <div className="page-header">
            <img alt="..." className="path" src={"./assets/img/blob.png"} />

            <img
              alt="..."
              className="shapes triangle"
              src={"./assets/img/triunghiuri.png"}
            />
            <img
              alt="..."
              className="shapes wave"
              src={"./assets/img/waves.png"}
            />
            <img
              alt="..."
              className="shapes squares"
              src={"./assets/img/patrat.png"}
            />
            <img
              alt="..."
              className="shapes circle"
              src={"./assets/img/cercuri.png"}
            />

           
             {/* <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We keep your coin <br />
                    <span className="text-white">secured</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={"./assets/img/etherum.png"}
                  />
                </Col>
              </Row>
            </div>
    </div>
    <section className="section section-lg">
            <img alt="..." className="path" src={"./assets/img/path4.png"} />

            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Your best benefit</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Low Commission</h4>
                        <hr className="line-primary" />
                        <p>
                          Divide details about your work into parts. Write a few
                          lines about each one. A paragraph describing a feature
                          will.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">High Incomes</h4>
                        <hr className="line-warning" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Verified People</h4>
                        <hr className="line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={"./assets/img/chester-wade.jpg"}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <img alt="..." className="path" src={"./assets/img/path4.png"} />
          </section>
          <section className="section section-lg section-coins">
            <img alt="..." className="path" src={"./assets/img/path3.png"} />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the coin{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"./assets/img/bitcoin.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"./assets/img/etherum.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"./assets/img/ripp.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section> */}
          <Footer />
        </div>
      </>
    );
  }
}

export default SourcesPage;
