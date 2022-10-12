import Comment from "./Comment";

const comments = [
  { name: "user 1", comments: "hello" },
  { name: "user 2", comments: "how are" },
  { name: "user 2", comments: "you!" },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comments) => {
        return <Comment name={comments.name} comments={comments.comments} />;
      })}
    </div>
  );
}
export default CommentList;
