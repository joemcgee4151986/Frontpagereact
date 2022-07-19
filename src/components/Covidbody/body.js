import React from "react";

import {virusData} from "./virusData";
import {MutationInfo} from "./MutationInfo";
import {WHO} from "./WHO";
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
          <h1 className={styles.title}> {post.description2}</h1>

          <p className={styles.siteSub}> {virusData.COVID.variants.map((mutationEntry, index)=> <WHO key={index} mutationEntry={mutationEntry}/>)}<i><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1"> -World Health Organization</a></i></p>
          <p className={styles.roleNote}></p>
          <div className={styles.articleRight}>
            <div className={styles.articleRightInner}>
              <img
                src="https://images-ext-2.discordapp.net/external/PvClCHOCVvaBOoAY2Zt-wEKOYowTCqF6p1RukB5PRAw/https/fcgj83z0eul3uqz2k1ej79r8-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/original-vs-mutant-SARS-CoV-2-spike-protein.jpg"
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
                <span>1</span>
                <HashLink smooth to="#D614G">
                 COVID TYPES
                </HashLink>
              </li>
              
            </ul>
          </div>
       
          <h1 id ="D614G">{post.variant}</h1>
          <p>{post.changes}</p>
          <p>{post.description}</p>
          {virusData.COVID.variants.map((mutationEntry, index)=> <MutationInfo key={index} mutationEntry={mutationEntry}/>)}
         
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

