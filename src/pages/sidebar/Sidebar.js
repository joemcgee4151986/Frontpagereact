import React from 'react';
import "./Sidebarvisual.module.css";
export default function Sidebar() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Wikipedia Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://html5-templates.com/" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {/* Place favicon.ico in the root directory */}
        <link rel="stylesheet" href="Sidebarvisual.module.css" />
    <div className="wrapAll clearfix">
          <div className="sidebar">
            <div className="logo">
              <a href="/"><img src alt="" /></a>
            </div>
            <div className="navigation">
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
                <li><a href="./About">About</a></li>
                <li><a href="Mainsectiontwo" >Space facts 2</a></li>
              </ul>
            </div>
          </div>
          </div>
          </div>
          );
          }