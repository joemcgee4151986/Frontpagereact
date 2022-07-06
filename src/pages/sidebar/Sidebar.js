import React from 'react';
import styles from './Sidebar.module.css';
export default function Sidebarvisual() {
    return (
      <div>
    <div className="wrapAll clearfix">
          <div className={styles.sidebar}>
            <div className="logo">
              <a href="/"><img src alt="" /></a>
            </div>
         <ul>
                <li><a href = ".">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Covid">Covid</a></li>
                <li><a href="./Mainsectiontwo">Virus</a></li>
              </ul>
            </div>
          </div>
          </div>
         

     
    
     
      
          );
          }