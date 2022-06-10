import { getSession } from "next-auth/client";
import { useState } from "react";

const CommentsPage = ({ data }) => {
  const [state, setState] = useState([]);
  const [comment, setComment] = useState("");

  //function to get data from comment
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setState(data);
  };

  //function for post comments
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(`data`, data);
  };

  //for delete comment
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(`data`, data);
    await fetchComments();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{data}</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {state.map((comment) => (
        <div key={comment.id}>
          <b> {comment.id}</b>
          {comment.text}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;

//secure your pages with serverSideProps
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // console.log(`context`, context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/comments`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session
        ? "comment of 100 personalized people"
        : "List of free comments",
    },
  };
};
