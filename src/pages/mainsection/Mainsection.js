import React from 'react';
import styles from './mainsection.module.css';
import axios from 'axios';

import { Outlet} from "react-router-dom";
const baseURL= "https://desolate-sea-33600.herokuapp.com/users/first";
export default function Mainsection() {
  const [post, setPost] = React.useState(null);
    

 
    
  
      React.useEffect(() =>{
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, [])
    
      if (!post) return null;
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
              <h1 className={styles.title}>{post.au_fname}</h1>
              <p className="siteSub">From Wikipedia, the free encyclopedia</p>
              <p className="roleNote">This article is about the writing implement. For other uses, see Pencil (disambiguation).</p>
           <div className="articleRight">
                <div className="articleRightInner">
                  {/*<img src="https://thecatapi.com/api/images/get?format=src&type=gif" alt="meteors" />*/}
                </div>
                <p>{post.au_fname}</p>
              </div>
              <div>
              <p>{post.au_id}</p>
              </div>
              
        
              <div className="contentsPanel">
                <div className="contentsHeader">Contents</div>
                <ul>
                  <li>
                    <span>1</span><a href="/">History</a>
                    <ul>
                      <li><span>1.1</span><a href="/">Camel's hair pencil</a> </li>
                      <li><span>1.2</span><a href="/">Discovery of graphite deposit</a> </li>
                      <li><span>1.3</span><a href="/">Wood holders added </a></li>
                      <li><span>1.4</span><a href="/">The pencil in America </a></li>
                      <li><span>1.5</span><a href="/">Eraser attached </a></li>							
                      <li><span>1.6</span><a href="/">Marking material </a></li>							
                      <li><span>1.7</span><a href="/">Pencil extenders </a></li>							
                    </ul>
                  </li>
                  <li><span>2</span><a href="/">Health</a></li>
                  <li><span>3</span><a href="/">Manufacture</a></li>
                  <li><span>4</span><a href="/">Grading and classification</a></li>
                </ul>
              </div>
              
             {/* <div className="lavenderBox">
                <div className="header">Panel title</div>
                <div className="subtitle linklist"><a href="/">Lorem</a> <a href="/">Ipsum</a> <a href="/">Dolorestitas</a> </div>
                <div className="linklist">
                  <a href="/">Percipit </a> <a href="/">Mnesarchum </a> <a href="/">Molestie </a> <a href="/">Phaedrum </a> <a href="/">Luptatum constituam </a> <a href="/">Habeo adipisci </a> <a href="/">Inani zril</a> <a href="/">Forensibus sea </a> <a href="/">Habeo adipisci </a> <a href="/">Minimum corrumpit </a> <a href="/">Regione suscipit </a> <a href="/">Has et partem </a><a href="/">Percipit </a> <a href="/">Mnesarchum </a> <a href="/">Molestie </a> <a href="/">Phaedrum </a> <a href="/">Luptatum constituam </a> <a href="/">Habeo adipisci </a> <a href="/">Inani zril</a> <a href="/">Vel nisl albucius </a> <a href="/">Habeo adipisci </a> <a href="/">Minimum corrumpit </a> <a href="/">Regione suscipit </a> <a href="/">Percipit maiestatis </a> <a href="/">Regione suscipit </a> <a href="/">Percipit maiestatis </a>
                </div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="categories">/*}
    <a href="/">Minimum corrumpit </a> <a href="/">Regione suscipit </a> <a href="/">Has et partem </a>*/}
            
        
            {/*<div className="pagefooter">
               Template by <a href={"https://html5-templates.com/"} target="_blank" rel="noopener noreferrer">HTML5 Templates</a> {/* Please leave this link unchanged */}
              {/*<div className="footerlinks">
                <a href="/">Privacy policy</a> <a href="/">About</a> <a href="/">Terms and conditions</a> <a href="/">Cookie statement</a> <a href="/">Developers</a>*/}
                <Outlet />
           
           </div>
           </div>
            </div>
          
          
      
      
      );  
}

      
    
