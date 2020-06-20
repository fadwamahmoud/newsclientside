import React from "react";
import classnames from "classnames";
import axios from "axios";
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

class RegisterPage extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    errors: { fullName: "" },
    schema: {
      fullName: Joi.object({
        fullName: Joi.string().min(10).max(50).required().messages({
          "string.base": `fullname should be a type of 'text'`,
          "string.empty": `fullname cannot be an empty field`,
          "string.min": `fullname should have a minimum length of {#limit}`,
          "string.max": `fullname should have a maximum length of {#limit}`,
          "any.required": `fullname is a required field`,
        }),
      }),
      password: Joi.object({
        password: Joi.string()
          .pattern(new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))"))
          .min(8)
          .messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": `email cannot be an empty field`,
            "any.required": `email is a required field`,
            "string.pattern.base": `password must contain at least 1 lowercase, 1 uppercase and 1 number`,
          }),
      }),
      email: Joi.object({
        email: Joi.string()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          })
          .messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": `email cannot be an empty field`,
            "any.required": `email is a required field`,
            "string.email": `email is not valid`,
          }),
      }),
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(this.state.errors).length === 0) {
      const user = {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post(`${process.env.REACT_APP_HEROKU_URL}/user/register`, user)
        .then((response) => {
          if ((response.status = 202)) {
            // login

            axios
              .post(`${process.env.REACT_APP_HEROKU_URL}/user/login`, user)
              .then((response) => {
                localStorage.setItem("token", response.data.token);
                this.props.history.push("/home");
              })
              .catch((error) => {});
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  handleValidation = (e) => {
    const fullName = Joi.object({
      fullName: Joi.string().alphanum().min(3).max(30).required(),
    });
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
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <Form
                      method="post"
                      style={{ display: "flex", flexDirection: "column" }}
                      className="form"
                      onSubmit={this.handleSubmit}
                    >
                      <Card className="card-register">
                        <CardHeader>
                          <CardImg
                            alt="..."
                            src={"./assets/img/square-purple-1.png"}
                          />
                          <CardTitle tag="h4">Register</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <InputGroup
                            className={
                              this.state.errors.fullName
                                ? "has-danger"
                                : classnames({
                                    "input-group-focus": this.state
                                      .fullNameFocus,
                                  })
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              onChange={this.handleValidation}
                              name="fullName"
                              placeholder="Full Name"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          {this.state.errors.fullName && (
                            <span className="errorspan">
                              {this.state.errors.fullName}
                            </span>
                          )}
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
                        </CardBody>
                        <CardFooter>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            type="submit"
                          >
                            Register
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
        </div>
      </>
    );
  }
}

export default RegisterPage;
