import React, { useState } from "react";
import DetailItem from "./DetailItem";
import { Checkbox } from "semantic-ui-react";

const Comment = ({ id }) => {
  let comments = id && id.sort((x, y) => y - x).slice(0, 20);
  let label = comments && `(${comments.length}) comments`;

  const [collapsed, setCollapsed] = useState(true);

  const handleCheckbox = (e, { checked }) => setCollapsed(checked);
  return (
    <>
      <Checkbox
        defaultChecked
        label={label}
        onChange={handleCheckbox}
        className="comment__label"
        title="Comment"
      />

      {comments &&
        comments.map((commentId) => (
          <DetailItem
            id={commentId}
            collapsed={collapsed}
            key={commentId}
            data-test="comment"
          />
        ))}
    </>
  );
};

export default Comment;
