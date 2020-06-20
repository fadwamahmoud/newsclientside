import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Articles";
import { Link } from "react-router-dom";
import PaginationComponent from "./Pagination";
import { Col } from "reactstrap";
import Tabs from "./Tabs";
const ArticlesPage = (props) => {
  const [articles, setState] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const getNews = async () => {
    axios
      .get(`${process.env.REACT_APP_LOCAL_URL}/user/feed/${activePage}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(({ data }) => {
        setState(data.articles);
        setMaxPage(Math.ceil(data.totalResults / 10));
      })
      .catch((err) => {
        console.log(err);
        // 422 error no token => redirect to login page
        props.history.push("/login");
      });
  };
  const handlePagination = (pageNumber) => {
    window.scrollTo(0, 0);
    // when user clicks page number get more news with active page number as result page
    setActivePage(pageNumber);
    getNews(activePage);
  };
  useEffect(() => {
    getNews(activePage);
  }, []);

  return (
    <>
      {articles === "no subscriptions" ? (
        <div
          style={{
            width: "60vw",
          }}
          class="alert alert-primary"
          role="alert"
        >
          You are not subscribed to any news sources. Go to{" "}
          <Link to="/sources" class="alert-link">
            sources page{" "}
          </Link>
          and start subscribing.
        </div>
      ) : (
        <Col>
          <img alt="..." className="path" src={"./assets/img/blob.png"} />
          <img alt="..." className="path" src={"./assets/img/path4.png"} />
          <Articles articles={articles}></Articles>
          <PaginationComponent
            activePage={activePage}
            handlePagination={handlePagination}
            maxPage={maxPage}
          ></PaginationComponent>
        </Col>
      )}
    </>
  );
};

export default ArticlesPage;
