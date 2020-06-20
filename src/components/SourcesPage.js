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

// core components
import Sources from "./Sources";

class SourcesPage extends React.Component {
  state = {
    sources: [],
  };
  componentDidMount() {
    const getNews = async () => {
      axios
        .get(`${process.env.REACT_APP_HEROKU_URL}/user/sources`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          console.log(data);
          this.setState({ sources: data });
        })
        .catch((err) => {
          // 422 error no token => redirect to login page
          this.props.history.push("/login");
        });
    };
    getNews();
  }
  handleSubscribe = async (sourceId, action) => {
    // variable action is either subscribe or unsubscribe
    axios
      .patch(
        `${process.env.REACT_APP_HEROKU_URL}/user/${action}/${sourceId}`,
        null,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
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
        this.props.history.push("/login");
      });
  };
  handleUnsubscribe = async (sourceId) => {
    await axios
      .patch(
        `${process.env.REACT_APP_HEROKU_URL}/user/unsubscribe/${sourceId}`,
        null,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then()
      .catch((err) => {
        this.props.history.push("/login");
      });
  };
  render() {
    return (
      <>
        {this.state.sources.length > 0 ? (
          <>
            <img alt="..." className="path" src={"./assets/img/blob.png"} />
            <img alt="..." className="path" src={"./assets/img/path4.png"} />
            <Sources
              handleSubscribe={this.handleSubscribe}
              handleUnsubscribe={this.handleUnsubscribe}
              sources={this.state.sources}
            ></Sources>
          </>
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
      </>
    );
  }
}

export default SourcesPage;
