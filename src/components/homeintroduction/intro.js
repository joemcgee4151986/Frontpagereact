import React from "react";
import styles from "./intro.module.css";
class Intro extends React.Component {
    render() {
        return (
<div>
      <div className={styles.mainsection}>
        <div className={styles.headerLinks}>
        </div>
        <div className={`${styles.tabs} ${styles.clearfix}`}>
          <div className={styles.tabsLeft}>
         
          </div>
         
          <div className={styles.tabsRight}>
           
          </div>
        </div>
     
        <div className={styles.article}>
          <h1>Welcome to VirusWiki!</h1>
          <p className={styles.siteSub}></p>
          <p className={styles.roleNote}>
            Welcome to the VirusWiki database. VirusWiki is a free wiki resource
            that lets you learn about viruses. I hope you will be able to learn
            more about viruses so you can gain a better understanding. Our
            information is sourced from medical journals from leading scientific
            experts and other proven sources. We will continue to add more
            information in the coming months.
          </p>
          <p className={styles.roleNote}>
            The idea for a wiki was created so people can learn more about
            viruses and to connect medical articles created by scientists to
            everyone. As of now, this database is maintained by two people who
            are passionate about this project. Within the next year, we plan on
            expanding our team.
          </p>
          </div>
          <div class="pagefooter">
           <center>Template by <a href="http://html5-templates.com/" target="_blank" rel="noreferrer">HTML5 Templates</a></center>
           <div class="footerlinks">
        </div>
        </div>
        </div>
        </div>
       
        );
    }
}


export default Intro;