import React from "react";
import {virusData} from "./virusData";
import {WHO} from "./WHO";
import {MutationInfo} from "./MutationInfo";
import styles from "./body.module.css";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
const baseURL = "";

export default function Body() {
  const [post, setPost,] = React.useState(null);

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
          <h1 className={styles.title}> {post.description2}</h1>

          <p className={styles.siteSub}></p>
          {virusData.COVID.summary.map((mutationEntry, index)=> <WHO key={index} mutationEntry={mutationEntry}/>)} <i><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1"> -World Health Organization</a></i>
          <p className={styles.roleNote}></p>
          <div className={styles.articleRight}>
            <div className={styles.articleRightInner}>
              <img
                src="https://www.shepscenter.unc.edu/wp-content/uploads/2020/04/COVID-image-scaled.jpg"
                alt="meteors"
              />
            </div>
            <p>View the 3d model <a href = "https://sketchfab.com/3d-models/sars-cov-2-covid-19-1533d2519b084a1580ddba0d3c5a3aff">here</a></p>
          </div>
          <div>
            <p id="information"></p>
          </div>
          <div className={styles.contentsPanel}>
            <div className={styles.contentsHeader}>
              <b>Contents</b>
            </div>
            <ul>
                <li>
                <span>1.0</span>
                <HashLink smooth to= "#D614G">
                D614G
                </HashLink></li>
                <li>
                <span>1.1</span>
                <HashLink smooth to="#Alpha">
                Alpha
                </HashLink>
                <li>
                <span>1.2</span>
                <HashLink smooth to="#Beta">
                 Beta
                </HashLink></li>
                <span>1.3</span>
                <HashLink smooth to="#Gamma">
                 Gamma
                </HashLink>
                <li>
                <span>1.4</span>
                <HashLink smooth to="#Delta">
                Delta
                </HashLink>
              </li>
              <li>
                <span>1.5</span>
                <HashLink smooth to="#Omicron BA.1">
                Omicron BA.1
                </HashLink>
              </li>
              <li>
                <span>1.6</span>
                <HashLink smooth to="#Omicron BA.1.1">
                Omicron BA.1.1
                </HashLink>
              </li>
              <li>
                <span>1.7</span>
                <HashLink smooth to="#Omicron BA.2">
                Omicron BA.2
                </HashLink>
                </li>
                <li>
                <span>1.8</span>
                <HashLink smooth to="#Omicron BA.3">
                Omicron BA.3
                </HashLink>
              </li>
              <li>
                <span>1.8</span>
                <HashLink smooth to="#Omicron BA.4/5">
                Omicron BA.4/5
                </HashLink>
              </li>
              <li>
                <span>1.9</span>
                <HashLink smooth to="#References">
               References
                </HashLink>
              </li>
              </li>
            </ul>
          </div>
       
          <h1 id ="D614G">{post.variant}</h1>
          <p>{post.changes}</p>
          <p>{post.description}
          {virusData.COVID.variants.map((mutationEntry, index)=> <MutationInfo key={index} mutationEntry={mutationEntry}/>)}</p>
        </div>
        <div class="pagefooter">
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
    </div>
  );
}  

