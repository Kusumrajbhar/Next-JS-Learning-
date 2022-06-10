import React from "react";
import Link from "next/link";
import BlogPaper from "../../components/blog/BlogPaper";
import { Grid } from "@material-ui/core";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(`data`, data);
  console.log(`res`, res);
  return {
    props: {
      data,
    },
  };
};

const indexBlog = ({ data }) => {
  return (
    <>
      <h1>Blog</h1>

      <Grid container spacing={2}>
        {data.slice(0, 6).map((value) => (
          <div key={value.id}>
            <Link href={`/blog/${value.id}`}>
              <Grid item sm={12} md={4} lg={3}>
                <BlogPaper id={value.id} title={value.title} />
              </Grid>
            </Link>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default indexBlog;
