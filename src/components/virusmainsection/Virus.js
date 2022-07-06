import React from "react";
import styles from "./virus.module.css";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
const baseURL = "https://catfact.ninja/fact?max_length=140";
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
                <h1 className={styles.title}>{post.length}</h1>
      
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
                  <p id="information">{post.fact}</p>
                </div>
      
                <div className={styles.contentsPanel}>
                  <div className={styles.contentsHeader}>Contents</div>
                  <ul>
                    <li>
                      <span>1</span>
                      <a href="/">History</a>
                      <ul>
                        <li>
                          <span>1.1</span>
                          <HashLink smooth to="#information">
                            First
                          </HashLink>
                        </li>
                        <li>
                          <span>1.2</span>
                          <a href="/">Discovery of graphite deposit</a>{" "}
                        </li>
                        <li>
                          <span>1.3</span>
                          <a href="/">Wood holders added </a>
                        </li>
                        <li>
                          <span>1.4</span>
                          <a href="/">The pencil in America </a>
                        </li>
                        <li>
                          <span>1.5</span>
                          <a href="/">Eraser attached </a>
                        </li>
                        <li>
                          <span>1.6</span>
                          <a href="/">Marking material </a>
                        </li>
                        <li>
                          <span>1.7</span>
                          <a href="/">Pencil extenders </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>2</span>
                      <a href="/">Health</a>
                    </li>
                    <li>
                      <span>3</span>
                      <a href="/">Manufacture</a>
                    </li>
                    <li>
                      <span>4</span>
                      <a href="/">Grading and classification</a>
                    </li>
                  </ul>
                </div>
      
                
              </div>
            </div>
          </div>
        );
      }
      
        
        
          
        