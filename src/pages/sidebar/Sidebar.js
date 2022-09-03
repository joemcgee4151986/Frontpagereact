import React from 'react';
import styles from './Sidebar.module.css';
import '../../darkmode.css'
export default function Sidebarvisual() {

    return (
      <div>
   
    <div className="wrapAll clearfix">
    <div className={styles['mobile-menu']}>
    <label for={styles['show-menu']} classname={styles['show-menu']}><div class={styles.lines}></div>
    <input type="checkbox" id={styles['show-menu']} />
    <ul id={styles.menu}>
                <li><a href = ".">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Covid">Covid</a></li>
                <li><a href="./Monkeypox">Monkeypox</a></li>
              </ul>
 
       {/*   <div className={styles.sidebar} />*/}
            <div className="logo">
              <a href="/"><img src alt="" /></a>
            </div>
         
             
              </label>
            </div>
          </div>
          </div>
       
 
     
   
     
     
          );
          }
