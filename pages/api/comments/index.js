import { comments } from "../../../data/comments";

export default function handler(req, res) {
  // to get
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    //to post
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(400).message("Something Wrong");
  }
}
