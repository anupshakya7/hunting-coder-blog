import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import styles2 from "@/styles/Home1.module.css";
import Dummy from "@/components/dummy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx>{`
        .mySpan {
          color: red;
        }
      `}</style>
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
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      {/* <Script src="/script.js" strategy="lazyOnload"></Script> */}
      <main className={`${styles.main} ${inter.className}`}>
        <Dummy />
        <span className="mySpan dummy">Hunting Coder</span>
        <div>
          <h2>Popular Blogs</h2>
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
