import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import utilStyles from "../../styles/util.module.css";
import { useStyle } from "./CardStyle";
import Image from "next/image";
// import girl2 from "/images/girl2.jpg";

function NewsCard({ title, body }) {
  const classes = useStyle();

  return (
    <Link href={`/news/${title}`}>
      <Card className={classes.mainCard} elevation={3}>
        <CardActionArea>
          <Image
            priority
            src="/Images/girl2.jpg"
            className={classes.ImageBorderRadius}
            height={144}
            width={144}
            alt="kusum"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.contentSpaceBetween}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            className={classes.buttonStyle}
          >
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            variant="contained"
            className={classes.buttonStyle}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default NewsCard;
