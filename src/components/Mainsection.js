import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const baseURL= "https://catfact.ninja/fact";
export default function Mainsectiontwo() {
  const [post, setPost] = React.useState(null);
    

 
    
  
      React.useEffect(() =>{
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, [])
    
      if (!post) return null;
      return (
        
        


    
    
// You can think of these components as "pages"
// in your app.

function Mainsection() {
  <Router>
      <div>
        <ul>
          <li>
            <Link to="Mainsection">Mainsection</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
         
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          
          
          </Route>
        </Switch>
      </div>
    </Router>
  
}
  return (
    <div>
      <h2>Home</h2>
       <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Wikipedia Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://html5-templates.com/" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {/* Place favicon.ico in the root directory */}
        <link rel="stylesheet" href="App.css" />
        {/*[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        {/*sidebar starts*/}
        <div className="wrapAll clearfix">
          <div className="sidebar">
            <div className="logo">
              <a href="/"><img src alt="" /></a>
            </div>
            <div className="navigation">
              <ul>
                
                <li><a href ="#">Main page</a></li>
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
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
                <li><a href="./Mainsectiontwo" >Space facts 2</a></li>
              </ul>
            </div>
          </div>
          {/*sidebar ends*/}
          {/*main section*/}
          <div className="mainsection">
            <div className="headerLinks">
              <span className /> <a href="#">Talk</a> <a href="#">Contributions</a> <a href="#">Create account</a> <a href="#">Log in</a>
            </div>
            <div className="tabs clearfix">
              <div className="tabsLeft">
                <ul>
                  <li><a href="#" className="active">Article</a></li>
                  <li><a href="#">Contact</a></li>
                  					
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
            {/*main section ends*/}
            {/*Article section starts */}
            <div className="article">
              <h1>nope</h1>
              <p className="siteSub">From Wikipedia, the free encyclopedia</p>
              <p className="roleNote">This article is about the writing implement. For other uses, see Pencil (disambiguation).</p>
              <div className="articleRight">
                <div className="articleRightInner">
                  <img src="https://apod.nasa.gov/apod/image/2206/TauHerMeteors_Lyu_1080.jpg" alt="meteors" />
                </div>
               
              </div>
              <div>
             
              </div>
              
        
              <div className="contentsPanel">
                <div className="contentsHeader">Contents</div>
                <ul>
                  <li>
                    <span>1</span><a href="#">History</a>
                    <ul>
                      <li><span>1.1</span><a href="#">Camel's hair pencil</a> </li>
                      <li><span>1.2</span><a href="#">Discovery of graphite deposit</a> </li>
                      <li><span>1.3</span><a href="#">Wood holders added </a></li>
                      <li><span>1.4</span><a href="#">The pencil in America </a></li>
                      <li><span>1.5</span><a href="#">Eraser attached </a></li>							
                      <li><span>1.6</span><a href="#">Marking material </a></li>							
                      <li><span>1.7</span><a href="#">Pencil extenders </a></li>							
                    </ul>
                  </li>
                  <li><span>2</span><a href="#">Health</a></li>
                  <li><span>3</span><a href="#">Manufacture</a></li>
                  <li><span>4</span><a href="#">Grading and classification</a></li>
                </ul>
              </div>
              <h2>Paulo eirmod intellegam</h2>
              <h3>Percipit maiestatis sea eu</h3>
              <p>Ex quod meis per, ea paulo eirmod intellegam usu, eam te propriae fabellas. Nobis graecis has at, an eum audire impetus. Ius epicuri verterem ex, qui cu solet feugiat consetetur. Placerat apeirian et sea, nec wisi viderer definiebas ex, at eum oratio honestatis.</p>
              <p>Eum illum nulla graeci at, mea quis munere indoctum at. In sea partiendo hendrerit. Quaestio partiendo an eam, rebum vitae accumsan ius id. Duo at causae option.</p>
              <p>At persius imperdiet vis, ea elit atqui aperiri mei, percipit maiestatis sea eu. Has et partem hendrerit, vim cibo veniam aliquid an. No pri populo abhorreant, everti mandamus ne mea. Debitis forensibus suscipiantur ius cu. Ei per possim verterem, et iudico voluptatum eos.</p>
              <h3>Nam option recusabo</h3>
              <p>Te mel meis adhuc. Choro percipit mei eu, fabulas fuisset tibique ad sea, cu eos sint falli iracundia. Usu ex minimum corrumpit, postea dolores salutandi ne est, cu nam option recusabo reprehendunt. Prima vocibus argumentum ex usu. Nam te legere salutatus dissentiunt, his ei principes prodesset, est possit blandit ex.</p>
              <p>Pro no rebum timeam necessitatibus, et mnesarchum quaerendum has. Duo molestie interesset at. Vel ad legere populo. Sed ne saepe doming perpetua. Omnis iuvaret volumus an duo, qui duis audiam fabellas in.</p>
              <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
              <h2>Sed rebum regione suscipit</h2>
              <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>
              {/*Article section ends*/}
              <div className="lavenderBox">
                <div className="header">Panel title</div>
                <div className="subtitle linklist"><a href="#">Lorem</a> <a href="#">Ipsum</a> <a href="#">Dolorestitas</a> </div>
                <div className="linklist">
                  <a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril</a> <a href="#">Forensibus sea </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a><a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril</a> <a href="#">Vel nisl albucius </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a>
                </div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="categories">
                <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a>
              </div>
            </div>
            <div className="pagefooter">
              This page was last edited on 29.07.2017 | Template by <a href="http://html5-templates.com/" target="_blank" rel="nofollow">HTML5 Templates</a> {/* Please leave this link unchanged */}
              <div className="footerlinks">
                <a href="#">Privacy policy</a> <a href="#">About</a> <a href="#">Terms and conditions</a> <a href="#">Cookie statement</a> <a href="#">Developers</a>
              </div>
            </div>
          </div>		
        </div>
      </div>
      </div>
      );
}

      
    

    

function About() {
  return (
    <div>
      <h2>About</h2>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Wikipedia Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://html5-templates.com/" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {/* Place favicon.ico in the root directory */}
        <link rel="stylesheet" href="Apptwo.css" />
        {/*[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        {/*sidebar starts*/}
        <div className="wrapAll clearfix">
          <div className="sidebar">
            <div className="logo">
              <a href="/"><img src alt="" /></a>
            </div>
            <div className="navigation">
              <ul>
             
                <li><a href="Contents">Contents</a></li>
                <li><a href="Featured content">Featured content</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
                <li><a href="#">Help</a></li>
                <body>
                <li><a href ="#" >About</a></li>
                </body>
                <li><a href="#">Portal</a></li>
              </ul>
              <h3>Interaction</h3>
              <ul>
                <li><a href="./index2.html">Help</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portal</a></li>
              </ul>
            </div>
          </div>
          {/*sidebar ends*/}
          {/*main section*/}
          <div className="mainsection">
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
            {/*main section ends*/}
            {/*Article section starts */}
            <div className="article">
              <h1>Space facts 2</h1>
              <p className="siteSub">From Wikipedia, the free encyclopedia</p>
              <p className="roleNote">This article is about the writing implement. For other uses, see Pencil (disambiguation).</p>
              <div className="articleRight">
                <div className="articleRightInner">
                  <img src="https://apod.nasa.gov/apod/image/2206/TauHerMeteors_Lyu_1080.jpg" alt="meteors" />
                </div>
               
              </div>
              <div>
             
              </div>
              
        
              <div className="contentsPanel">
                <div className="contentsHeader">Contents</div>
                <ul>
                  <li>
                    <span>1</span><a href="#">History</a>
                    <ul>
                      <li><span>1.1</span><a href="#">Camel's hair pencil</a> </li>
                      <li><span>1.2</span><a href="#">Discovery of graphite deposit</a> </li>
                      <li><span>1.3</span><a href="#">Wood holders added </a></li>
                      <li><span>1.4</span><a href="#">The pencil in America </a></li>
                      <li><span>1.5</span><a href="#">Eraser attached </a></li>							
                      <li><span>1.6</span><a href="#">Marking material </a></li>							
                      <li><span>1.7</span><a href="#">Pencil extenders </a></li>							
                    </ul>
                  </li>
                  <li><span>2</span><a href="#">Health</a></li>
                  <li><span>3</span><a href="#">Manufacture</a></li>
                  <li><span>4</span><a href="#">Grading and classification</a></li>
                </ul>
              </div>
              <h2>Paulo eirmod intellegam</h2>
              <h3>Percipit maiestatis sea eu</h3>
              <p>Ex quod meis per, ea paulo eirmod intellegam usu, eam te propriae fabellas. Nobis graecis has at, an eum audire impetus. Ius epicuri verterem ex, qui cu solet feugiat consetetur. Placerat apeirian et sea, nec wisi viderer definiebas ex, at eum oratio honestatis.</p>
              <p>Eum illum nulla graeci at, mea quis munere indoctum at. In sea partiendo hendrerit. Quaestio partiendo an eam, rebum vitae accumsan ius id. Duo at causae option.</p>
              <p>At persius imperdiet vis, ea elit atqui aperiri mei, percipit maiestatis sea eu. Has et partem hendrerit, vim cibo veniam aliquid an. No pri populo abhorreant, everti mandamus ne mea. Debitis forensibus suscipiantur ius cu. Ei per possim verterem, et iudico voluptatum eos.</p>
              <h3>Nam option recusabo</h3>
              <p>Te mel meis adhuc. Choro percipit mei eu, fabulas fuisset tibique ad sea, cu eos sint falli iracundia. Usu ex minimum corrumpit, postea dolores salutandi ne est, cu nam option recusabo reprehendunt. Prima vocibus argumentum ex usu. Nam te legere salutatus dissentiunt, his ei principes prodesset, est possit blandit ex.</p>
              <p>Pro no rebum timeam necessitatibus, et mnesarchum quaerendum has. Duo molestie interesset at. Vel ad legere populo. Sed ne saepe doming perpetua. Omnis iuvaret volumus an duo, qui duis audiam fabellas in.</p>
              <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
              <h2>Sed rebum regione suscipit</h2>
              <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>
              {/*Article section ends*/}
              <div className="lavenderBox">
                <div className="header">Panel title</div>
                <div className="subtitle linklist"><a href="#">Lorem</a> <a href="#">Ipsum</a> <a href="#">Dolorestitas</a> </div>
                <div className="linklist">
                  <a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril</a> <a href="#">Forensibus sea </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a><a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril</a> <a href="#">Vel nisl albucius </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a>
                </div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="categories">
                <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a>
              </div>
            </div>
            <div className="pagefooter">
              This page was last edited on 29.07.2017 | Template by <a href="http://html5-templates.com/" target="_blank" rel="nofollow">HTML5 Templates</a> {/* Please leave this link unchanged */}
              <div className="footerlinks">
                <a href="#">Privacy policy</a> <a href="#">About</a> <a href="#">Terms and conditions</a> <a href="#">Cookie statement</a> <a href="#">Developers</a>
              </div>
            </div>
          </div>		
        </div>
      </div>
      </div>
      );
}
      
    

    
