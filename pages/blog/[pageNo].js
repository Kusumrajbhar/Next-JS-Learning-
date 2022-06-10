import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((el) => {
    return {
      params: {
        pageNo: el.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(`data`, data);
  console.log(`res`, res);
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const { id, title, body } = data;

  const router = useRouter();
  const routedPage = router.query.pageNo;
  return (
    <div style={{ backgroundColor: "yellowgreen" }}>
      {/* <h1>My Blog {routedPage} Content</h1> */}
      <h3>{id}</h3>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default pageNo;
