import React from "react";
import styles from "./article.module.css";


class Article extends React.Component {
  render() {
    return (
    <div>
      <h2>Joseph McGee</h2>
      <p className={styles.siteSub}>
      While I'm not programming, I like to relax, exercise, and play video
            games when my son is sleeping. You can find my projects{" "}
            <a
              href="https://github.com/joemcgee4151986"
              target="_blank"
              rel="noreferrer"
            >
              here.</a></p>
      <h2> Michael McGee</h2>
      <p className={styles.siteSub}>
      I'm a Microbiology Technologist at LabCorp. I also go to school for my PostBacc in Biomedical Informatics. In my downtime, I hang with my loving girlfriend, game, and watch too much tv.
      </p>
      </div>
      );
    }
  }

  export default Article;
            
           
 
  
    
