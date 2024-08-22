import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import styles2 from "@/styles/Home1.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          h1 {
            font-size: 40px;
          }

          h2 {
            font-size: 30px;
          }

          .blogTitle {
            display: flex;
            justify-content: center;
          }

          .blogItem {
            border-radius: 10px;
            padding: 20px;
            border: 1px solid grey;
            margin: 10px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Code Hunter" />
        <meta
          name="keywords"
          content="next, huntingcoder blog, hunting coder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/script.js" strategy="lazyOnload"></Script> */}
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Hunting Coder</h1>
        <Image
          className={styles.myImage}
          alt="Hunting Coder"
          src="/coder.avif"
          width={237}
          height={158}
        />
        <div className="popular_blogs">
          <h2 className="blogTitle">Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>Javscript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>Javscript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>Javscript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
