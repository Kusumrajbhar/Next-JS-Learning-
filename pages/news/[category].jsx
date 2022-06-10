import { Grid } from "@material-ui/core";
import React from "react";
import NewsCard from "../../components/card/NewsCard";
import style from "./news.module.css";

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(`qyery`, query);
  console.log(`req.headers.cookie`, req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Kusum"]);
  const response = await fetch(`http://localhost:5000/News?title=${category}`);
  const data = await response.json();
  return {
    props: {
      data,
      category,
    },
  };
};

const Category = ({ data, category }) => {
  return (
    <>
      <h1>
        Showing news for <i>{category}</i>
      </h1>
      <Grid container spacing={2}>
        {data.map((value) => (
          <Grid item key={value.id} sm={12} md={4} lg={3}>
            <NewsCard title={value.title} body={value.Body} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Category;
