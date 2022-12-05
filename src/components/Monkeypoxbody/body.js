
import React from "react";
import styles from "./virus.module.css";
import {monkeypoxData} from "./monkeypoxData";
import {WHO} from "./WHO";
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
                <h1 className={styles.title}>Data coming soon!</h1>
      
                <p className={styles.siteSub}>
                {monkeypoxData.monkeypox.summary.map((mutationEntry, index)=> <WHO key={index} mutationEntry={mutationEntry}/>)} <i><a href="https://www.who.int/news/item/12-08-2022-monkeypox--experts-give-virus-variants-new-names"> -World Health Organization</a></i>
                </p>
                <p className={styles.roleNote}>
                  This article is about the writing implement. For other uses, see
                  Pencil (disambiguation).
                </p>
                <div className={styles.articleRight}>
                  <div className={styles.articleRightInner}>
                    <img
                      src="https://www.cdc.gov/poxvirus/monkeypox/images/monkeypox.jpg?_=66117"
                      alt="meteors"
                    />
                  </div>
                  <p>{post.id}</p>
                </div>
                <div>
                  <p id="information">Data will be posted soon!</p>
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
                      <div class="pagefooter">
                      </div>
                      </div>
                      </div>
          <center>
            Template by{" "}
            <a
              href="http://html5-templates.com/"
              target="_blank"
              rel="noreferrer"
            >
              HTML5 Templates
            </a>
          </center>
          
          <p></p>
        </div>
      </div>
   




);
}
