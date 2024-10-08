import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const slug = () => {
  const router = useRouter();

  const [blogItem, setBlogItem] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogItem(parsed);
      });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blogItem.title}</h1>
      <div className={styles.description}>{blogItem.content}</div>
    </div>
  );
};

export default slug;
