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
                    <i class="fa-light fa-language"></i>
                    Translation
                  </a>
                  <a href="../services/localization.html">
                    <i class="fa-light fa-globe-americas"></i> 
                    Localization
                  </a>
                  <a href="../services/interpretation.html">
                    <i class="fa-light fa-headphones"></i> 
                    Interpretation
                  </a>
                  <a href="../services/mtpe.html">
                    <i class="fa-light fa-robot"></i> 
                    MT Post-Editing
                  </a>
                  <a href="../services/desktop-publishing.html">
                    <i class="fa-light fa-file-pen"></i> 
                    Desktop Publishing
                  </a>
                  <a href="../services/transcription.html">
                    <i class="fa-light fa-keyboard"></i> 
                    Transcription
                  </a>
                  <a href="../services/website-app-testing.html">
                    <i class="fa-light fa-globe-pointer"></i>
                    Website & App Testing
                  </a>
                  <a href="../services/subtitling-voice-over.html">
                    <i class="fa-light fa-closed-captioning"></i> 
                    Subtitling & Voice-over
                  </a>
                  <a href="../services/transcreation.html">
                    <i class="fa-light fa-lightbulb-on"></i>
                    Transcreation
                  </a>
                </div>
              </div>

            </li>
            <li class="drop">
              <a class="link active" href="javascript:;"> Industries <i class="fa-light fa-angle-down"></i></a>
  <div class="dropMenu">
                <div class="box dropItems">
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
                    <i class="fa-light fa-coins"></i> Finance
                  </a>
                  <a href="./games.html">
                    <i class="fa-light fa-gamepad"></i> Gaming
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
                  <a href="./manufacturing.html">
                    <i class="fa-light fa-industry"></i> Manufacturing
                  </a>
                  <a href="./telecommunications.html">
                    <i class="fa-light fa-tower-cell"></i> Telecommunications
                  </a>
                  <a href="./technology.html">
                    <i class="fa-light fa-microchip"></i>Technology 
                  </a>
                </div>
              </div>

            </li>
          <li class="drop"><a class="link" href="../languages.html"> Languages <i class="fa-light fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="../languages.html#me">
                    <i class="fa-light fa-mosque"></i> Middle Eastern Languages
                  </a>
                  <a href="../languages.html#af">
                    <i class="fa-light fa-tree"></i> African Languages
                  </a>
                  <a href="../languages.html#eu">
                    <i class="fa-light fa-landmark-dome"></i> European Languages
                  </a>
                  <a href="../languages.html#as">
                    <i class="fa-light fa-torii-gate"></i> Asian Languages
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
