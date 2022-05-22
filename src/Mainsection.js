import React from 'react';
import './Style.css';


export default function Mainsection() {
      return (
  
        <div className="Mainsection">
          <div className="headerLinks">
            <span className /> <a href="#">Talk</a> <a href="#">Contributions</a> <a href="#">Create account</a> <a href="#">Log in</a>
          </div>
          <div className="tabs clearfix">
            <div className="tabsLeft">
              <ul>
                <li><a href="#" className="active">Article</a></li>
                <li><a href="#">Talk</a></li>						
              </ul>
            </div>
            <div id="simpleSearch">
              <input type="text" name="searchInput" id="searchInput" placeholder="Search Wikipedia" size={12} />
              <div id="submitSearch" />
            </div>
            <div className="tabsRight">
              <ul>
                <li><a href="#" className="active">Read</a></li>
                <li><a href="#">View source</a></li>						
                <li><a href="#">View history</a></li>						
              </ul>
            </div>
          </div>
        </div>
      );
    }
 ;