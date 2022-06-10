import { comments } from "../../../data/comments";

//to get single comment through id
export default function handler(req, res) {
  const { commentId } = req.query; // from req.query can extract commentId

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    //to delete single comment
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}
