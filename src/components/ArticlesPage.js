import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Articles";
import { Link } from "react-router-dom";
import PaginationComponent from "./Pagination";
import { Col } from "reactstrap";

const ArticlesPage = (props) => {
  const [articles, setState] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);
  const getNews = async (pageNumber) => {
    axios
      .get(`${process.env.REACT_APP_LOCAL_URL}/user/feed/${pageNumber}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(({ data }) => {
        if (data === "no subscriptions") {
          setState(data);
        } else {
          setState(data.articles);
          // maximum newsapi reults for free is 10 so thats the max page number
          // in case number of results is less than 100 set the maxpage
          const max = Math.ceil(data.totalResults / 10);
          max <= 10 && setMaxPage(max);
        }
      })
      .catch((err) => {
        // 422 error no token => redirect to login page
        // and alert that user that the session has ended
        window.alert("your session has ended, please re-login");
        props.history.push("/login");
      });
  };
  const handlePagination = (pageNumber) => {
    if (pageNumber <= maxPage) {
      // scroll back to top
      window.scrollTo(0, 400);
      // when user clicks page number get more news with active page number as result page
      setActivePage(pageNumber);
      getNews(pageNumber);
    }
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
