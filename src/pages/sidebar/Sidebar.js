import React from 'react';
import Sidebarvisualstyles from'./Sidebarvisual.module.css';

export default function Sidebarvisual() {
    return (
      <div>
    <div className={Sidebarvisualstyles.wrapAllclearfix}>
          <div className={Sidebarvisualstyles.sidebar}>
            <div className={Sidebarvisualstyles.logo}>
              <a href="/"><img src alt="" /></a>
            </div>
            <div className={Sidebarvisualstyles.navigation}>
              <ul>
                
                {/*<li><a href ="#">Main page</a></li>
                <li><a href="Contents">Contents</a></li>
                <li><a href="Featured content">Featured content</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portal</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
      <li><a href="#">Help</a></li>*/}
                <li><a href={"About"}>About</a></li>
                <li><a href={"./src/pages/mainsection/Mainsection"}>Mainsection</a></li>
                <li><a href={"./src/pages/mainsectiontwo/Mainsectiontwo"}>Space facts 2</a></li>
              </ul>
            </div>
          </div>
          </div>
      </div>
          );
          }