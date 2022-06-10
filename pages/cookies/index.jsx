import React from "react";
import styles from "./cookie.module.css";
import Cookie from "js-cookie";

function Cookies({ token }) {
  const loginHandler = () => {
    Cookie.set("token", "ABCD", { expires: 1 / 24 });
  };

  const logoutHandler = () => {
    Cookie.remove("token");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cookies</h1>
      <h2>Token: {token}</h2>
      <button className={styles.loginButton} onClick={loginHandler}>
        Login
      </button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Cookies;

export const getServerSideProps = ({ req, res }) => {
  return { props: { token: req.cookies.token || "" } };
};
