import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them
const blog = () => {
  return (
    <div className={styles.latest_blogs}>
      <h2 className={styles.blogTitle}>Latest Blogs</h2>
      <div className={styles.blogItem}>
        <Link href={"/blogpost/learn-javascript"}>
          <h3>How to Learn JavaScript in 2022?</h3>
        </Link>
        <p>Javscript is the language used to design logic for the web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn JavaScript in 2022?</h3>
        <p>Javscript is the language used to design logic for the web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn JavaScript in 2022?</h3>
        <p>Javscript is the language used to design logic for the web</p>
      </div>
    </div>
  );
};

export default blog;
