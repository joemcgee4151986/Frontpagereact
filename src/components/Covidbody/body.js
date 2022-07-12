import React from "react";

import styles from "./body.module.css";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
const baseURL = "https://desolate-sea-33600.herokuapp.com/virus/1";
export default function Body() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
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
                <h1 className={styles.title}>{post.description2}</h1>
      
                <p className={styles.siteSub}>
                  From Wikipedia, the free encyclopedia
                </p>
                <p className={styles.roleNote}>
                  
                </p>
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
                  <div className={styles.contentsHeader}><b>Contents</b></div>
                  <ul>
                    <li>
                      <span>1</span>
                      <a href="/">History</a>
                     
                        <li>
                          <span>1.1</span>
                          <HashLink smooth to="#information">
                            First
                          </HashLink>
                        </li>
                        </li>
                      </ul>
                  </div>
                  <h1>Coming Soon{post.overview}</h1>
      <p>{post.purpose}</p>
      <h1>{post.variant}</h1>
      <p>{post.description}</p>
                     </div>
                     </div>
                     </div>
);
}
      
                
              
            
          

        
        
          
        