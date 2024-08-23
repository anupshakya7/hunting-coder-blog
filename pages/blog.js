import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them
const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={styles.latest_blogs}>
      <h2 className={styles.blogTitle}>Latest Blogs</h2>
      {blogs.map((blogitem) => {
        return (
          <div className={styles.blogItem} key={blogitem.title}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3>{blogitem.title}</h3>
            </Link>
            <p>{blogitem.content.substr(0, 180)}...</p>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
