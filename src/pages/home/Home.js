import React from 'react';
import styles from './home.module.css';



export default function Home() {
 
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
           
              <h1>Welcome to Virus Wiki!</h1>
              <p className={styles.siteSub}>Coming Soon!</p>
              <p className={styles.roleNote}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse est tellus, finibus at dui sed, posuere facilisis dolor. Morbi pretium porttitor quam, ut vehicula ligula tincidunt et. Phasellus et ante libero. Nulla quis dictum tortor. In scelerisque nibh sit amet tortor suscipit, id pellentesque augue efficitur. Donec vel sodales massa. Vivamus posuere urna metus, accumsan convallis tellus pellentesque sit amet. Duis lacinia facilisis quam, ut placerat urna egestas pharetra. Nunc viverra aliquet enim, ut posuere enim porta vitae. Donec eros est, mattis a bibendum id, efficitur a nunc. Donec et dapibus quam, vitae finibus turpis. Vestibulum nec convallis erat.

Proin eleifend sapien vitae ultrices commodo. Mauris nec nulla convallis, dictum dui a, suscipit orci. Sed ultricies est ac mattis malesuada. Proin ac lacus dui. Nam ullamcorper molestie mauris, venenatis luctus ex pulvinar vel. Fusce vitae sem enim. Nullam sodales tempor mi vel luctus. Nullam scelerisque maximus bibendum. Duis arcu sapien, tempus eget ante nec, ultricies dictum nisl. Praesent ut suscipit urna. Maecenas condimentum ipsum vitae metus suscipit varius. Integer blandit lorem at laoreet venenatis. Duis rhoncus nisi ac odio consectetur, nec interdum lacus rhoncus.

Nulla dapibus leo tortor, id elementum erat sagittis quis. Nullam interdum libero purus, sit amet tempus turpis hendrerit at. Phasellus accumsan turpis id nibh ultrices eleifend vitae eu leo. Donec rhoncus elementum urna nec lobortis. Nullam neque enim, accumsan non erat ut, ultricies fringilla massa. Morbi enim arcu, lobortis id mi et, hendrerit elementum risus. Curabitur vehicula magna quis viverra ullamcorper. Aenean vitae tempus nulla. Proin commodo ante velit. Nulla malesuada tortor ligula, ornare finibus lectus pulvinar ac. Quisque semper quam eget nisl tempor, pharetra tempor libero semper. Maecenas facilisis, arcu quis rhoncus feugiat, turpis urna tincidunt dui, vel sodales velit nisl vitae ex. Aliquam erat volutpat. Integer est arcu, sagittis egestas nibh quis, fringilla efficitur risus.

Vestibulum aliquet pulvinar libero, a fermentum enim iaculis ac. Vivamus nec lacus malesuada, interdum dolor eget, aliquet nisl. Ut non justo eu orci consectetur pulvinar. Nullam rhoncus ornare magna sit amet efficitur. Vivamus orci neque, bibendum sed turpis quis, porta scelerisque ligula. Nam bibendum diam sed fringilla egestas. Vivamus non tortor leo. Quisque ornare aliquet aliquam. Etiam urna ipsum, placerat scelerisque erat eu, facilisis consequat sem. Nunc a nibh quis lorem efficitur dictum. Pellentesque imperdiet efficitur eros, pulvinar luctus eros efficitur at. In tincidunt risus id elit semper, eget facilisis quam efficitur. Phasellus convallis, mauris a maximus pulvinar, metus enim tempus erat, at consequat dui metus imperdiet sapien. Mauris porta, arcu ac tempus posuere, nunc lectus vulputate ante, a accumsan ex velit nec arcu.

Maecenas in ipsum vel tortor condimentum scelerisque. Morbi vitae ullamcorper mauris, a dictum nulla. Proin ut vulputate risus, volutpat aliquam quam. Suspendisse potenti. Nunc purus est, vulputate in eleifend in, rutrum nec lorem. Phasellus imperdiet eleifend neque et fringilla. Etiam et lorem arcu. Curabitur a faucibus dui, et suscipit tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sodales arcu leo, eu porta ipsum mattis et. Suspendisse ac orci quis lectus pharetra rhoncus. Nulla consequat risus elit, quis molestie nulla porttitor vitae. Fusce elit eros, convallis quis malesuada sit amet, condimentum vel neque. Nullam sit amet augue at augue posuere tincidunt a sed sapien. Proin non tincidunt diam. .</p>
          
                <p>Welcome to Viruswiki</p>
              </div>
              <div>
            
              </div>
              
        
              {/*<div className="contentsPanel">
                <div className="contentsHeader">Contents</div>
                <ul>
                  <li>
                    <span>1</span><a href="/">History</a>
                    <ul>
                    
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
    </div>*/}
              
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
              
           
           </div>
           </div>
  
          
      
      
      );  
}

      
    
