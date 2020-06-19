import React from "react";
import classnames from "classnames";
import axios from "axios";

import { Redirect } from "react-router-dom";
import Joi from "@hapi/joi";
import { login } from "../helpers/helpers";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";

// core components
import ExamplesNavbar from "./ExamplesNavbar.js";
import Footer from "./Footer.js";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    errors: { password: "" },
    statusCode: "",
    invalidMsg: "",
    schema: {
      password: Joi.object({
        password: Joi.string().required().messages({
          "string.base": `email should be a type of 'text'`,
          "string.empty": `email cannot be an empty field`,
          "any.required": `email is a required field`,
        }),
      }),
      email: Joi.object({
        email: Joi.string()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          })
          .trim()
          .messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": `email cannot be an empty field`,
            "any.required": `email is a required field`,
            "string.email": `email is not valid`,
          }),
      }),
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(this.state.errors).length === 0) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      // login request
      axios
        .post(`${process.env.REACT_APP_HEROKU_URL}/user/login`, user)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.props.history.push("/home");
        })
        .catch((error) => {
          this.setState({
            ...this.state,
            invalidMsg: "username or password are incorrect",
          });
        });
    }
  };

  handleValidation = (e) => {
    const data = {
      [e.target.name]: e.target.value,
    };
    try {
      if (
        //joi's new validate method, takes schema and data
        Joi.attempt(data, this.state.schema[e.target.name], {
          abortEarly: false,
        })
      ) {
        // create new error object and remove the property that's valid
        const newError = { ...this.state.errors };
        delete newError[e.target.name];
        // set state with input values and newError object
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value,
          errors: newError,
        });
      }
    } catch (err) {
      // add new error to state as well as input values
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          [err.details[0].path[0]]: err.details[0].message,
        },
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      style={{ display: "flex", flexDirection: "column" }}
                      className="form"
                    >
                      <Card className="card-register">
                        <CardHeader>
                          <CardImg
                            alt="..."
                            src={"./assets/img/square-purple-1.png"}
                          />
                          <CardTitle tag="h4">Login</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <InputGroup
                            className={
                              this.state.errors.email
                                ? "has-danger"
                                : classnames({
                                    "input-group-focus": this.state.emailFocus,
                                  })
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              onChange={this.handleValidation}
                              name="email"
                              placeholder="Email"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ emailFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocus: false })
                              }
                            />
                          </InputGroup>
                          {this.state.errors.email && (
                            <span className="errorspan">
                              {this.state.errors.email}
                            </span>
                          )}
                          <InputGroup
                            className={
                              this.state.errors.password
                                ? "has-danger"
                                : classnames({
                                    "input-group-focus": this.state
                                      .passwordFocus,
                                  })
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              onChange={this.handleValidation}
                              name="password"
                              placeholder="Password"
                              type="password"
                              onFocus={(e) =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ passwordFocus: false })
                              }
                            />
                          </InputGroup>
                          {this.state.errors.password && (
                            <span className="errorspan">
                              {this.state.errors.password}
                            </span>
                          )}
                          {this.state.invalidMsg && (
                            <span className="errorspan">
                              {this.state.invalidMsg}
                            </span>
                          )}
                        </CardBody>
                        <CardFooter>
                          <Button
                            type="submit"
                            className="btn-round"
                            color="primary"
                            size="lg"
                          >
                            Login
                          </Button>
                        </CardFooter>
                      </Card>
                    </Form>
                  </Col>
                </Row>
                <div className="register-bg" />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default LoginPage;
