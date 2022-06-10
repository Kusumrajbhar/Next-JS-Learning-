import React from "react";
// import NewsCard from "../../components/card/NewsCard";
import { Grid } from "@material-ui/core";
import styles from "./news.module.css";
import dynamic from "next/dynamic";

const NewsCard = dynamic(() => import("../../components/card/NewsCard"));

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/News");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const News = ({ data }) => {
  return (
    <div className={styles.completePage}>
      <h1 className={styles.heading}>List of News Articles </h1>
      <Grid container spacing={2}>
        {data.map((value) => (
          <Grid key={value.div} item sm={12} md={4} lg={3}>
            <NewsCard title={value.title} body={value.Body} />
          </Grid>
        ))}
      </Grid>
      <h1 className={styles.heading}>List of Actors </h1>
      <Grid container spacing={2}>
        {data.map((value) => (
          <Grid item sm={12} md={4} lg={3}>
            <NewsCard title={value.title} body={value.Body} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
