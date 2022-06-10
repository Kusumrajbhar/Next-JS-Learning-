import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  const homeThroughRouter = () => {
    router.push("/");
  };

  return (
    <>
      <h1>404</h1>
      <h3>We are sorry page not found</h3>
      <Link href="/">
        <a>back to Home</a>
      </Link>
      <p onClick={homeThroughRouter}>
        <h4 className="homeRouter">Home Through Router</h4>
      </p>
    </>
  );
};
export default ErrorPage;

<style jsx>
  {`
    .homeRouter {
      cursor: pointer;
      color: blue;
    }
  `}
</style>;
