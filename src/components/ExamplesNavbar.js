import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to={
                this.props.path === "/home" || this.props.path === "/sources"
                  ? "/home"
                  : "/"
              }
              id="navbar-brand"
              tag={Link}
            >
              <span>NEWS• </span>
              DOT COM
            </NavbarBrand>

            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link
                    to={
                      this.props.path === "/home" ||
                      this.props.path === "/sources"
                        ? "/home"
                        : "/"
                    }
                  >
                    NEWS•DOT COM
                  </Link>

                  <br></br>
                  {this.props.path !== "/register" &&
                    this.props.path !== "/sources" &&
                    this.props.path !== "/home" && (
                      <Link to={"/register"}>register</Link>
                    )}
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            {(this.props.path === "/home" ||
              this.props.path === "/sources") && (
              <Link
                onClick={() => {
                  localStorage.setItem("token", "");
                }}
                className="text-white"
                to="/login"
              >
                Logout
              </Link>
            )}
            {this.props.path !== "/home" && this.props.path !== "/sources" && (
              <Nav navbar>
                {this.props.path !== "/register" && (
                  <NavItem>
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="primary"
                      target="_blank"
                    >
                      <Link to="/register">
                        <i className="tim-icons icon-spaceship" /> Register
                      </Link>
                    </Button>
                  </NavItem>
                )}

                {this.props.path !== "/login" && (
                  <NavItem>
                    <NavLink>
                      <Link to="/login">Have an account? Login</Link>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
