import React from "react";
import styles from "./blogStyle.module.css";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import { Card, CardActionArea, CardContent, Paper } from "@material-ui/core";

function BlogPaper({ title, id }) {
  return (
    <Card className={styles.completePaper}>
      {" "}
      <CardActionArea>
        <Image
          priority
          src="/Images/girl2.jpg"
          height={144}
          width={144}
          alt="kusum"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogPaper;
