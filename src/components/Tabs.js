import React from "react";
import { Link } from "react-router-dom";
const Tabs = (props) => {
  return (
    <>
      <div class="card-header card-header-danger">
        <div class="nav-tabs-navigation">
          <div class="nav-tabs-wrapper">
            <ul
              style={{ marginTop: "60px" }}
              class="nav nav-tabs justify-content-center"
              data-tabs="tabs"
            >
              <li class="nav-item">
                <Link
                  class={
                    props.match.path === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/home"
                  data-toggle="tab"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={
                    props.match.path === "/sources"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/sources"
                  data-toggle="tab"
                >
                  Sources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body ">
        <div class="tab-content text-center">
          <div class="tab-pane active" id="home">
            <p>
              I think that&#x2019;s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. So when you get something that has the name Kanye West on
              it, it&#x2019;s supposed to be pushing the furthest possibilities.
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus.
            </p>
          </div>
          <div class="tab-pane" id="updates">
            <p>
              {" "}
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&#x2019;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at. I think that&#x2019;s a
              responsibility that I have, to push possibilities, to show people,
              this is the level that things could be at.{" "}
            </p>
          </div>
          <div class="tab-pane" id="history">
            <p>
              {" "}
              I think that&#x2019;s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that&#x2019;s a responsibility
              that I have, to push possibilities, to show people, this is the
              level that things could be at.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
