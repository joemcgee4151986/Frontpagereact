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
                <h1 className={styles.title}>{post.changes}</h1>
      
                <p className={styles.siteSub}>
                  From Wikipedia, the free encyclopedia
                </p>
                <p className={styles.roleNote}>
                  This article is about the writing implement. For other uses, see
                  Pencil (disambiguation).
                </p>
                <div className={styles.articleRight}>
                  <div className={styles.articleRightInner}>
                    <img
                      src="https://res.cloudinary.com/dtpgi0zck/image/upload/s--7UXxoGoz--/c_fill,h_580,w_860/v1/EducationHub/photos/virus.webp"
                      alt="meteors"
                    />
                  </div>
                  <p>{post.id}</p>
                </div>
                <div>
                  <p id="information">{post.description}</p>
                </div>
      
                <div className={styles.contentsPanel}>
                  <div className={styles.contentsHeader}>Contents</div>
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
                     </div>
                     </div>
                     </div>
);
}
      
                
              
            
          

        
        
          
        