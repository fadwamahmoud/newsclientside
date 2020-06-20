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
import Carousell from "./Carousel";
import Footer from "./Footer.js";
import { Link, Switch, Route } from "react-router-dom";
import Tabs from "./Tabs.js";
import ArticlesPage from "./ArticlesPage.js";
import SourcesPage from "./SourcesPage";
import SideComponent from "./Main.js";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <img
            alt="..."
            className="shapes wave"
            src={"./assets/img/waves.png"}
          />

          <img
            alt="..."
            className="shapes circle"
            src={"./assets/img/cercuri.png"}
          />
          <div
            class="card card-nav-tabs card-plain"
            style={{
              paddingTop: "20vh",
              paddingLeft: "10vw",
              paddingRight: "10vw",
            }}
          >
            <Row>
              <SideComponent />

              <Carousell />
            </Row>

            {/* */}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
