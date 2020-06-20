import React from "react";

// core components

import { Switch, Route } from "react-router-dom";
import Tabs from "./Tabs.js";
import ArticlesPage from "./ArticlesPage.js";
import SourcesPage from "./SourcesPage";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div
            class="card card-nav-tabs card-plain"
            style={{
              paddingTop: "20vh",
              paddingLeft: "10vw",
              paddingRight: "10vw",
            }}
          >
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
              <Switch>
                <Route
                  path={"/home"}
                  render={() => <ArticlesPage {...this.props}></ArticlesPage>}
                ></Route>
                <Route
                  path={"/sources"}
                  render={() => <SourcesPage {...this.props}></SourcesPage>}
                ></Route>
              </Switch>
            </section>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
