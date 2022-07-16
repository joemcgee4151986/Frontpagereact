import React from "react";

import styles from "./body.module.css";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
const baseURL = "https://desolate-sea-33600.herokuapp.com/virus/1";
const baseURLtwo = "https://desolate-sea-33600.herokuapp.com/virus/2";
export default function Body() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  const [posttwo,setPosttwo] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURLtwo).then((response) => {
      setPosttwo(response.data);
    });
  }, []);




  if (!post) return null;

  return (
    <div>
      
      <div className={styles.mainsection}>
        <div className={styles.headerLinks}></div>
        <div className={`${styles.tabs} ${styles.clearfix}`}>
          <div className={styles.tabsLeft}>
            <ul></ul>
          </div>

          <div className={styles.tabsRight}>
            <ul></ul>
          </div>
        </div>

        <div className={styles.article}>
          
         
    <h1 className={styles.title}> {post.description2}</h1>
       
          <p className={styles.siteSub}>
          {post.changes}
          </p>
          <p className={styles.roleNote}></p>
          <div className={styles.articleRight}>
            <div className={styles.articleRightInner}>
              <img
                src="https://images-ext-2.discordapp.net/external/PvClCHOCVvaBOoAY2Zt-wEKOYowTCqF6p1RukB5PRAw/https/fcgj83z0eul3uqz2k1ej79r8-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/original-vs-mutant-SARS-CoV-2-spike-protein.jpg"
                alt="meteors"
              />
            </div>
            <p>{post.variant}</p>
          </div>
          <div>
            <p id="information">{post.summary}</p>
          </div>
          <div className={styles.contentsPanel}>
            <div className={styles.contentsHeader}>
              <b>Contents</b>
            </div>
            <ul>
              <li>
                <span>1.0</span>
                <a href="/">History</a>

                <li>
                  <span>1.1</span>
                  <HashLink smooth to="#information">
                    First
                  </HashLink>
                </li>
                <span>1.2</span>
                <HashLink smooth to="#D614G">
                  D614G
                </HashLink>
              </li>
              <li>
              <span>1.3</span>
                <HashLink smooth to="#Alpha">
                  Alpha
                </HashLink>
              </li>
            </ul>
          </div>
          <p>{post.purpose}</p>
          <h1>{post.variant}</h1>
          
          <p id="D614G">{post.description}</p>
          <h1>{posttwo.variant}</h1>
          <p id="Alpha">{posttwo.description}</p>
          </div>
          <div class="pagefooter">
           <center>Template by <a href="http://html5-templates.com/" target="_blank" rel="noreferrer">HTML5 Templates</a></center>
           <div class="footerlinks">
          
          <p></p>
        </div>
      </div>
    </div>
      </div>    
     
  );
}
