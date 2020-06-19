import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Articles";
import { Link } from "react-router-dom";

const ArticlesPage = (props) => {
  const [articles, setState] = useState([]);
  useEffect(() => {
    console.log(articles);
    const getNews = async () => {
      axios
        .get(`${process.env.REACT_APP_HEROKU_URL}/user/feed`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          setState(data);
        })
        .catch((err) => {
          console.log(err);
          // 422 error no token => redirect to login page
          props.history.push("/login");
        });
    };
    getNews();
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
        <Articles articles={articles}></Articles>
      )}
    </>
  );
};

export default ArticlesPage;
