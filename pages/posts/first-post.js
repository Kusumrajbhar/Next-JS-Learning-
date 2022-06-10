import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/util.module.css";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          {/* facebook og tag */}
          <title className="title">First Post</title>
          <meta
            property="og:url"
            content="http://localhost:3001/posts/first-post"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Posts" />
          <meta property="og:description" content="My post description" />
          <meta property="og:image" content="" />
        </Head>

        <h2>
          <Link href="/">
            <a className="title">Back to home</a>
          </Link>
        </h2>
        <Image
          className={styles.borderCircle}
          src="/Images/girl2.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <style jsx>
          {`
            .title {
              color: red;
            }
          `}
        </style>
      </Layout>
    </>
  );
}
