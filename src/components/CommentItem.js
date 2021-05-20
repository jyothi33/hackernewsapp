import React from "react";
import { Comment } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const CommentItem = ({ detail, collapsed }) => {
  const timeAgo = new TimeAgo("en-US");
  return (
    <Comment.Group collapsed={collapsed}>
      <Comment>
        <Comment.Avatar
          src={`https://avatars.dicebear.com/api/human/${detail.time}.svg?background=%230093fc`}
        />
        <Comment.Content>
          <Comment.Author as="a">{detail.by}</Comment.Author>
          <Comment.Metadata>
            <div>
              {timeAgo.format(detail.time * 1000, {
                now: new Date().getTime(),
              })}
            </div>
          </Comment.Metadata>
          <Comment.Text>
            <div dangerouslySetInnerHTML={{ __html: detail.text }}></div>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

export default CommentItem;
