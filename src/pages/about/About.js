import React from 'react';
import styles from './about.module.css';
export default function About() {
    return (
        <div>
      
          {/*[if lt IE 8]>
              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          <![endif]*/}
          {/*sidebar starts*/}
          
            {/*sidebar ends*/}
            {/*main section*/}
            <div className={styles.mainsection}>
              <div className={styles.headerLinks}>
              {/*  <span className /> <a href="/">Talk</a> <a href="/">Contributions</a> <a href="/">Create account</a> <a href="/">Log in</a>*/}
              </div>
              <div className={`${styles.tabs} ${styles.clearfix}`}>
                <div className={styles.tabsLeft}>
                  <ul>
                    {/*<li><a href="/" className={styles.active}>Article</a></li>
                    <li><a href="/">Contact</a></li>*/}
                              
                  </ul>
                </div>
                {/*<div id="simpleSearch">
                  <input type="text" name="searchInput" id="searchInput" placeholder="Search Wikipedia" size={12} />
                  <div id="submitSearch" />
                  
                </div>
                  */}
                <div className={styles.tabsRight}>
                  <ul>
                    {/*sidebar<li><a href="/" className="active">Read</a></li>
                    <li><a href="/">View source</a></li>						
        <li><a href="/">View history</a></li>		*/}				
                  </ul>
                </div>
              </div>
              {/*main section ends*/}
              {/*Article section starts */}
              <div className={styles.article}>
        
              
              <h2>Joseph McGee</h2>
              <p>While I'm not programming, I like to relax, exercise, and play video games when my son is sleeping. You can find my projects <a href="https://github.com/joemcgee4151986" target="_blank" rel="noreferrer">here.</a></p>
              {/*<p>Eum illum nulla graeci at, mea quis munere indoctum at. In sea partiendo hendrerit. Quaestio partiendo an eam, rebum vitae accumsan ius id. Duo at causae option.</p>
              <p>At persius imperdiet vis, ea elit atqui aperiri mei, percipit maiestatis sea eu. Has et partem hendrerit, vim cibo veniam aliquid an. No pri populo abhorreant, everti mandamus ne mea. Debitis forensibus suscipiantur ius cu. Ei per possim verterem, et iudico voluptatum eos.</p>
              <h3>Nam option recusabo</h3>
              <p>Te mel meis adhuc. Choro percipit mei eu, fabulas fuisset tibique ad sea, cu eos sint falli iracundia. Usu ex minimum corrumpit, postea dolores salutandi ne est, cu nam option recusabo reprehendunt. Prima vocibus argumentum ex usu. Nam te legere salutatus dissentiunt, his ei principes prodesset, est possit blandit ex.</p>
              <p>Pro no rebum timeam necessitatibus, et mnesarchum quaerendum has. Duo molestie interesset at. Vel ad legere populo. Sed ne saepe doming perpetua. Omnis iuvaret volumus an duo, qui duis audiam fabellas in.</p>
              <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
      */}
              <h2>Michael McGee</h2>
      <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>
              {/*Article section ends*/}
             
               {/*commented out code is left here so I don't want to readd the code from memory in the future if I do decide to use it.*/}
              </div>
              </div>
            </div>
          
     
     


    
      );
}

      
    

