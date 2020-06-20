import React from "react";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reactstrap components
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
const SideComponent = () => {
  return (
    <Col>
      <div className="content-center">
        <Row className="row-grid justify-content-between align-items-center text-left">
          <Col sm="8">
            <h1 className="text-white">
              We keep you <br />
              <span className="text-white">updated</span>
            </h1>
            <Row className="justify-content-md-center">
              <Card>
                <CardHeader>Daily live News</CardHeader>
                <CardBody>
                  "Sed ut perspiciatia voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas
                  nulla pariatur Sed ut perspiciatia voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                  quo voluptas nulla pariatur Sed ut perspiciatia voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariaturiatia voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatu vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur"
                </CardBody>
              </Card>
            </Row>

            {/* <p className="text-white mb-3">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel...
            </p>
            <div className="btn-wrapper mb-3">
              <p className="category text-success d-inline">From 9.99%/mo</p>
              <FontAwesomeIcon icon={faNewspaper} />
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
                ></Button>
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
            </div>*/}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SideComponent;
