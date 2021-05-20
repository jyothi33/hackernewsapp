import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import StoryItem from "./StoryItem";
import { Comment } from "semantic-ui-react";

const DetailItem = ({ id, collapsed }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const result = async () =>
      await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setDetail(result);
        })
        .catch((err) => console.log(err.message));
    result();
  }, [id]);

  return detail && detail.type === "comment" ? (
    <Comment.Group collapsed={collapsed}>
      <CommentItem detail={detail} />
    </Comment.Group>
  ) : (
    <StoryItem detail={detail} />
  );
};

export default DetailItem;
