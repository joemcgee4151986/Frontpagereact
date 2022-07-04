import React from "react";
import styles from "./about.module.css";
import Article from "../article/Article";

export default function About() {

  return (
    <div>
      <div className={styles.mainsection}>
        <div className={styles.headerLinks}>
        </div>
        <div className={`${styles.tabs} ${styles.clearfix}`}>
          <div className={styles.tabsLeft}>
          </div>
          <div className={styles.tabsRight}>
          </div>
        </div>
        <div className={styles.article}>
      <Article />
        </div>
      </div>
    </div>
  );
}
