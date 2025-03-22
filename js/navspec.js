document.querySelector('nav').innerHTML = `
<div class="box f-s">
        <a href="../index.html" class="logo">
          <img src="../media/logo.png" alt="">
        </a>
        <div class="links">
          <div class="ls">
            <ul class="mainLinks">
              <li><a class="link" href="../index.html">Home</a></li>
              <li><a class="link" href="../about.html"> About Us</a></li>
              <li class="drop">
                <a class="link" href="javascript:;">Services <i class="fa-regular fa-angle-down"></i></a>
                <div class="dropMenu">
                  <div class="box dropItems">
                    <a href="../services/7.html">
                    <!-- <i class="fa-regular fa-pen"></i> Translation -->
                    <img style="margin-top: 3px;" src="../media/icons/trans2.svg" alt="">  Translation
                  </a>
                  <a href="../services/2.html">
                    <i>
                      <img  style="margin-top: 3px;" src="../media/icons/trasnslation2.svg" alt="Localization Icon">
                    </i> Localization
                  </a>
                    <a href="../services/1.html">
                      <i class="fa-regular fa-desktop"></i> Desktop Publishing Services
                    </a>
                    <a href="../services/3.html">
                      <i>
                        <img src="../media/icons/MTPE.svg" alt="MTPE Icon">
                      </i> Machine Translation <br> Post-Editing (MTPE)
                    </a>
                    <a href="../services/4.html">
                      <i class="fa-regular fa-book"></i> Terminology Management
                    </a>
                    <a href="../services/5.html">
                      <i class="fa-regular fa-lightbulb-on"></i> Transcreation
                    </a>
                    <a href="../services/6.html">
                      <i class="fa-regular fa-keyboard"></i> Transcription
                    </a>
                  </div>
                </div>
  
              </li>
              <li class="drop">
                <a class="link active" href="javascript:;"> Industries <i class="fa-regular fa-angle-down"></i></a>
                <div class="dropMenu">
                  <div class="box dropItems">
                    <a href="./11.html">
                    <i class="fa-regular fa-cogs"></i> Technology
                    </a>
                    <a href="./1.html">
                      <i class="fa-regular fa-car"></i> Automotive
                    </a>
                    <a href="./2.html">
                      <i class="fa-regular fa-shopping-cart"></i> E-commerce
                    </a>
                    <a href="./3.html">
                      <i class="fa-regular fa-book-open"></i> Education & E-Learning
                    </a>
                    <a href="./4.html">
                      <i class="fa-regular fa-coins"></i> Financial
                    </a>
                    <a href="./5.html">
                      <i class="fa-regular fa-gamepad"></i> Games 
                    </a>
                    <a href="./6.html">
                      <i class="fa-regular fa-balance-scale"></i> Legal
                    </a>
                    <a href="./7.html">
                      <i class="fa-regular fa-heartbeat"></i> Life Sciences
                    </a>
                    <a href="./8.html">
                      <i class="fa-regular fa-bullhorn"></i> Marketing
                    </a>
                    <a href="./9.html">
                      <i class="fa-regular fa-user-md"></i> Medical
                    </a>
                    <a href="./10.html">
                      <i class="fa-regular fa-pills"></i> Pharma Translation Services
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
