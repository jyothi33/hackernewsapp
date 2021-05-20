import React from "react";
import Comment from "./Comment";
import { Grid } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const StoryItem = ({ detail }) => {
  const classes = useStyles();
  return (
    <>
      {detail && (
        <Grid.Column data-test="storyitem">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <a href={detail.url}>{detail.title}</a>
                {detail.kids && <Comment id={detail.kids} />}
              </Typography>
            </CardContent>
          </Card>
        </Grid.Column>
      )}
    </>
  );
};

export default StoryItem;
