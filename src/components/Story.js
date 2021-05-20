import React, { useState } from "react";
import DetailItem from "./DetailItem";
import { Grid } from "semantic-ui-react";
const Story = () => {
  const [story, setStory] = useState([]);

  React.useEffect(() => {
    const result = async () =>
      await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=10'
      )
        .then((response) => response.json())
        .then((result) => {
          setStory(result);
        })
        .catch((err) => console.log(err.message));
    result();
  }, []);

  return (
    <Grid stackable columns={2} color={"black"} data-test="story">
      {story.map((item) => (
        <DetailItem id={item} key={item} collap />
      ))}
    </Grid>
  );
};

export default Story;
