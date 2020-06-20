import React from "react";

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
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
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SideComponent;
