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
      Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex
            dicant percipit referrentur. Dicat luptatum constituam vix ut. His
            vide platonem omittantur id, vel quis vocent an. Ad pro inani zril
            omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones
            ad, tale autem graecis ne sit.
      </p>
      </div>
      );
    }
  }

  export default Article;
            
           
 
  
    
