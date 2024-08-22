import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Title of the page {slug}</h1>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum
        esse facilis nemo dolorem nihil nulla quaerat amet, earum dolore
        suscipit quis alias eius quod voluptas sint consectetur enim atque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        aspernatur, voluptatibus nam placeat, unde doloremque eligendi explicabo
        eveniet alias repellendus impedit, necessitatibus consectetur provident
        iure at! Perspiciatis autem assumenda eum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Accusantium, nisi? Consequuntur quia earum
        magnam ipsa reprehenderit iste maxime eum impedit nihil debitis in modi
        ab culpa, assumenda est et dolorem.
      </div>
    </div>
  );
};

export default slug;
