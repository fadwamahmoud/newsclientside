import axios from "axios";

const login = (user, props) => {
  axios
    .post(`${process.env.URL}/user/login`, user)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      props.history.push("/home");
    })
    .catch((error) => {});
};

const handleSubscribe = async (sourceId) => {
  console.log(`${process.env.URL}/user/subscribe/${sourceId}`);
  axios
    .patch(`${process.env.URL}/user/subscribe/${sourceId}`, null, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then()
    .catch((err) => {
      console.log(err);
    });
};
const handleUnsubscribe = async (sourceId) => {
  await axios
    .patch(`${process.env.URL}/user/unsubscribe/${sourceId}`, null, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then()
    .catch((err) => {
      console.log(err);
    });
};

export { login, handleSubscribe, handleUnsubscribe };
