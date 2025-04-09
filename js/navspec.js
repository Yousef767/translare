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
              <a class="link" href="javascript:;">Services <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="../services/translation.html">
                    <i class="fa-light fa-language"></i> Translation
                  </a>
                  <a href="../services/localization.html">
                    <i class="fa-light fa-globe-americas"></i> Localization
                  </a>
                  <a href="../services/multimedia.html">
                    <i class="fa-light fa-photo-film-music"></i> Multimedia
                  </a>
                  <a href="../services/interpretation.html">
                    <i class="fa-light fa-head-side-gear"></i> Interpretation
                  </a>
                  <a href="../services/transcreation.html">
                    <i class="fa-light fa-lightbulb-on"></i> Transcreation
                  </a>
                  <a href="../services/mtpe.html">
                    <i class="fa-light fa-user-robot"></i> MTPE
                  </a>
                </div>
              </div>

            </li>
            <li class="drop">
              <a class="link active" href="javascript:;"> Industries <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="./technology.html">
                    <i class="fa-light fa-cogs"></i> Technology
                  </a>
                  <a href="./automotive.html">
                    <i class="fa-light fa-car"></i> Automotive
                  </a>
                  <a href="./e-commerce.html">
                    <i class="fa-light fa-shopping-cart"></i> Ecommerce & Retail
                  </a>
                  <a href="./education-e-learning.html">
                    <i class="fa-light fa-book-open"></i> Education & E-Learning
                  </a>
                  <a href="./financial.html">
                    <i class="fa-light fa-coins"></i>Banking & Financial
                  </a>
                  <a href="./games.html">
                    <i class="fa-light fa-gamepad"></i> Games
                  </a>
                  <a href="./legal.html">
                    <i class="fa-light fa-balance-scale"></i> Legal
                  </a>
                  <a href="./life-sciences.html">
                    <i class="fa-light fa-heartbeat"></i> Life Sciences
                  </a>
                  <a href="./marketing.html">
                    <i class="fa-light fa-bullhorn"></i> Marketing & Advertising
                  </a>
                  <a href="./travel-hospitality.html">
                    <i class="fa-light fa-plane-departure"></i> Travel & Hospitality
                  </a>
                  <a href="./manufacturing-engineering.html">
                    <i class="fa-light fa-industry"></i> Manufacturing & Engineering
                  </a>                  
                </div>

              </div>

            </li>
            <li><a class="link" href="../languages.html"> Languages</a></li>
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
