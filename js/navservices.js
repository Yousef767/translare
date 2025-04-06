document.querySelector('nav').innerHTML = `
    <div class="box f-s">
      <a href="../index.html" class="logo">
        <img src="../media/logo.png" alt="">
      </a>
      <div class="links">
        <div class="ls">
          <ul class="mainLinks">
            <li><a class="link" href="../index.html">Home</a></li>
      <li class="drop">
              <a class="link" href="js:;"> About Us <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="../about.html">
                    <i class="fa-light fa-user-group"></i>
                    About Us
                  </a>
                  <a href="../our-workflow-process.html">
                    <i class="fa-light fa-diagram-project"></i>
                    Our Workflow Process
                  </a>
                  <a href="../quality-control-process.html">
                    <i class="fa-light fa-clipboard-check"></i>
                    Quality Control Process
                  </a>
                </div>
                
              </div>
            </li>
            <li class="drop">
              <a class="link active" href="javascript:;">Services <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="./translation.html">
                    <i class="fa-light fa-language"></i> Translation
                  </a>
                  <a href="./localization.html">
                    <i class="fa-light fa-globe-americas"></i> Localization
                  </a>
                  <a href="./multimedia.html">
                    <i class="fa-light fa-photo-film-music"></i> Multimedia
                  </a>
                  <a href="./interpretation.html">
                    <i class="fa-light fa-head-side-gear"></i> Interpretation
                  </a>
                  <a href="./transcreation.html">
                    <i class="fa-light fa-lightbulb-on"></i> Transcreation
                  </a>
                  <a href="./mtpe.html">
                    <i class="fa-light fa-user-robot"></i> MTPE
                  </a>
                </div>
              </div>

            </li>
            <li class="drop">
              <a class="link" href="javascript:;"> Industries <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="../industries/technology.html">
                    <i class="fa-light fa-cogs"></i> Technology
                  </a>
                  <a href="../industries/automotive.html">
                    <i class="fa-light fa-car"></i> Automotive
                  </a>
                  <a href="../industries/e-commerce.html">
                    <i class="fa-light fa-shopping-cart"></i> Ecommerce & Retail
                  </a>
                  <a href="../industries/education-e-learning.html">
                    <i class="fa-light fa-book-open"></i> Education & E-Learning
                  </a>
                  <a href="../industries/financial.html">
                    <i class="fa-light fa-coins"></i>Banking & Financial
                  </a>
                  <a href="../industries/games.html">
                    <i class="fa-light fa-gamepad"></i> Games
                  </a>
                  <a href="../industries/legal.html">
                    <i class="fa-light fa-balance-scale"></i> Legal
                  </a>
                  <a href="../industries/life-sciences.html">
                    <i class="fa-light fa-heartbeat"></i> Life Sciences
                  </a>
                  <a href="../industries/marketing.html">
                    <i class="fa-light fa-bullhorn"></i> Marketing & Advertising
                  </a>
                  <a href="../industries/travel-hospitality.html">
                    <i class="fa-light fa-plane-departure"></i> Travel & Hospitality
                  </a>
                  <a href="../industries/manufacturing-engineering.html">
                    <i class="fa-light fa-industry"></i> Manufacturing & Engineering
                  </a>                  
                </div>

              </div>

            </li>
            <li><a class="link" href="../contact.html"> Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="last">
        <button class="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
`
