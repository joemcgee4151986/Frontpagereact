import React from "react";
import {virusData} from "../api/covidapi.js";
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

          <p className={styles.siteSub}> {virusData.mutations.map((who,key) => {return  <p  key={key}>{who.who}</p>})} <i><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1"> -World Health Organization</a></i></p>
          <p className={styles.roleNote}></p>
          <div className={styles.articleRight}>
            <div className={styles.articleRightInner}>
              <img
                src="https://images-ext-2.discordapp.net/external/PvClCHOCVvaBOoAY2Zt-wEKOYowTCqF6p1RukB5PRAw/https/fcgj83z0eul3uqz2k1ej79r8-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/original-vs-mutant-SARS-CoV-2-spike-protein.jpg"
                alt="meteors"
              />
            </div>
            <p>Covid <a href = "https://www.nature.com/articles/s41598-022-04950-4/figures/1">mutating.</a></p>
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
                <HashLink smooth to="#D614G">
                  D614G
                </HashLink>
              </li>
              <li>
                <span>1.1</span>
                <HashLink smooth to="#Alpha">
                  Alpha
                </HashLink>
              </li>
              <li>
                <span>1.2</span>
                <HashLink smooth to="#Beta">
                  Beta
                </HashLink>
              </li>
              <li>
                <span>1.3</span>
                <HashLink smooth to="#Gamma">
                  Gamma
                </HashLink>
              </li>
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
                <span>1.9</span>
                <HashLink smooth to="#Omicron BA.4/5">
                Omicron BA.4/5
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
          <h1 id ="D614G">{post.variant}</h1>
          <p>{post.changes}</p>
          <p>{post.description}</p>

          {virusData.mutations.map((Alpha,key) => {return  <h1 id = "Alpha" key={key}>{Alpha.variant}</h1>})}
          {virusData.mutations.map((Alpha,key) => {return  <p key={key}>{Alpha.changes}</p> })}
          {virusData.mutations.map((Alpha,key) => {return  <p key={key}>{Alpha.description}</p> })}

         {virusData.mutations.map((Beta,key) => {return  <h1 id ="Beta"  key={key}>{Beta.varianttwo}</h1> })}
          {virusData.mutations.map((Beta,key) => {return  <p  key={key}>{Beta.changestwo}</p> })}
          {virusData.mutations.map((Beta,key) => {return  <p key={key}>{Beta.descriptiontwo}</p> })}
          
         {virusData.mutations.map((Gamma,key) => {return  <h1 id ="Gamma" key={key}>{Gamma.variantthree}</h1> })}
          {virusData.mutations.map((Gamma,key) => {return  <p key={key}>{Gamma.changesthree}</p>})}
          {virusData.mutations.map((Gamma,key) => {return  <p key={key}>{Gamma.descriptionthree} </p>})}

          {virusData.mutations.map((Delta,key) => {return  <h1 id ="Delta" key={key}>{Delta.variantfour}</h1> })}
          {virusData.mutations.map((Delta,key) => {return  <p key={key}>{Delta.changesfour}</p>})}
          {virusData.mutations.map((Delta,key) => {return  <p key={key}>{Delta.descriptionfour} </p>})}

          {virusData.mutations.map((OmicronBA1,key) => {return  <h1 id ="Omicron-BA.1" key={key}>{OmicronBA1.variantfive}</h1> })}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.changesfive}</p>})}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.descriptionfive} </p>})}
          
          {virusData.mutations.map((OmicronBA11,key) => {return  <h1 id ="Omicron-BA.1.1" key={key}>{OmicronBA11.variantsix}</h1> })}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.changessix}</p>})}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.descriptionsix} </p>})}

          {virusData.mutations.map((OmicronBA11,key) => {return  <h1 id ="Omicron-BA.2" key={key}>{OmicronBA11.variantsix}</h1> })}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.changessix}</p>})}
          {virusData.mutations.map((OmicronBA1,key) => {return  <p key={key}>{OmicronBA1.descriptionsix} </p>})}

          {virusData.mutations.map((OmicronBA2,key) => {return  <h1 id ="Omicron-BA.2" key={key}>{OmicronBA2.variantseven}</h1> })}
          {virusData.mutations.map((OmicronBA2,key) => {return  <p key={key}>{OmicronBA2.changesseven}</p>})}

          {virusData.mutations.map((OmicronBA3,key) => {return  <h1 id ="Omicron-BA.3" key={key}>{OmicronBA3.varianteight}</h1> })}
          {virusData.mutations.map((OmicronBA3,key) => {return  <p key={key}>{OmicronBA3.changeseight}</p>})}

          {virusData.mutations.map((OmicronBA45,key) => {return  <h1 id ="Omicron BA.4/5" key={key}>{OmicronBA45.variantnine}</h1> })}
          {virusData.mutations.map((OmicronBA45,key) => {return  <p key={key}>{OmicronBA45.changesnine}</p>})}

         
          </div>
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

         
        </div>
      </div>
</div>
    
  );
}
