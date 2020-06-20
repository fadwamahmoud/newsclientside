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
        .get(`${process.env.REACT_APP_LOCAL_URL}/user/sources`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          this.setState({ sources: data });
        })
        .catch((err) => {
          // 422 error no token => redirect to login page
          // and alert that user that the session has ended
          window.alert("your session has ended, please re-login");
          this.props.history.push("/login");
        });
    };
    getNews();
  }
  handleSubscribe = async (sourceId, action) => {
    // variable action is either subscribe or unsubscribe
    axios
      .patch(
        `${process.env.REACT_APP_LOCAL_URL}/user/${action}/${sourceId}`,
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
        // and alert that user that the session has ended
        window.alert("your session has ended, please re-login");
        this.props.history.push("/login");
      });
  };
  handleUnsubscribe = async (sourceId) => {
    await axios
      .patch(
        `${process.env.REACT_APP_LOCAL_URL}/user/unsubscribe/${sourceId}`,
        null,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then()
      .catch((err) => {
        // and alert that user that the session has ended
        window.alert("your session has ended, please re-login");
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
