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
                {/*commented out code is left here so I don't want to readd the code from memory in the future if I do decide to use it.*/}
                {/*<li><a href ="/">Main page</a></li>
                <li><a href="Contents">Contents</a></li>
                <li><a href="Featured content">Featured content</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
                <li><a href="/">Help</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Portal</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
      <li><a href="/">Help</a></li>*/}
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