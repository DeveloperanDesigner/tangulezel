<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ezel Tangul - Portfolio</title>
    <link rel="stylesheet" href="./style.css"/>
    <script src="./script.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 20px;
        }
        h2 {
            margin-top: 30px;
        }

        section:not(#about-me) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .skill {
            text-align: center;
            width: 30%;
            box-sizing: border-box;
        }
        .skill img {
            width: 80px;
            height: 80px;
        }
        .skill h6 {
            margin: 10px 0;
        }
        .projects-container, .all_recommendations {
            margin-top: 20px;
        }
        .recommendation {
            margin-bottom: 20px;
            padding: 10px;
            border-left: 3px solid #4CAF50;
            font-style: italic;
        }
        .recommendation span {
            font-size: 24px;
            color: #4CAF50;
        }

        .flex_center {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .iconbutton {
            position: fixed;
            bottom: 20px;
            right: 20px;
        }

        #about-me {
            display: flex;
            gap: 20px; 
        }

        #about-me img {
            align-self: center;
        }

        #about-me div {
            max-width: 600px; 
        }

    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
      <div id="home">
        <div class="profile_name">
          Ezel Tangul
          <div class="contact_info">
            <img src="html_finalprojimages/envelope.png" alt="Email Icon"/>
            tangulezel@gmail.com
          </div>
          <div style="clear:both;"></div>
        </div>

        <!-- Navigation Links -->
        <div class="topdiv">
          <a class="topmenu" href="#about-me">About Me</a>
          <a class="topmenu" href="#skills">Skills</a>
          <a class="topmenu" href="#projects">Projects</a>
          <a class="topmenu" href="#recommendations">Recommendations</a>
        </div>
      </div>    
    </nav>

    <section id="about-me" class="container">
        <div>
          <img src="https://media.istockphoto.com/id/2080108220/cs/vektor/pocit-emoc%C3%AD-a-emoc%C3%AD-lehkost-klid-a-mil%C3%BD-v%C3%BDraz-ilustrace-%C5%BEen-pracuj%C3%ADc%C3%ADch-v-podnic%C3%ADch-a.jpg?s=1024x1024&w=is&k=20&c=DF7WJgO6w1NDWoFLEgKACDetNDediMLVXD--ty7npss=" alt="Emotions and feelings vector illustration" width="300">
        </div>
        <div>
          <h1 class="about-me-title">Hi, I'm Ezel Tangul! 
              <img src="html_finalprojimages/waving-hand.png" class="emoji" width="60px" alt="Waving Hand"/>
          </h1>
          <div class="text-container">
          <p>
            I am a front-end developer with 5 years of experience in both application and presentation layers. As a passionate Front-End Developer, I specialize in creating intuitive and visually appealing user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life and ensure a seamless user experience.
          </p>
        </div>
      </section>
          </section>
    <hr>  
    <!-- Skills -->
    <section id="skills" class="container">
      <h2>Skills</h2>
      <div class="skills">
        <div class="skill">
          <h6>HTML5</h6>
          <img src="html_finalprojimages/html5.png" alt="HTML5 Icon"/>
        </div>  
        <div class="skill">
          <h6>JavaScript</h6>
          <img src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="JavaScript Icon"/>
        </div>
    </section>
    <hr>
    <!-- Projects -->
    <section id="projects" class="container">
      <h2>Projects</h2>
      <div style="clear:both;"></div>
      <div id="projects-container" class="projects-container">
        <div class="project-card">
          <h3>Adding a web page about the solar system for primary school
</h3>
          <ul>
            <li>Making solar system knowledge more fluid.</li>
          </ul>
        </div>
        <hr>
        <div class="project-card">
          <h3> Simple Interest Calculator
</h3>
          <ul>
            <li>Facilitate faster calculation of interest.
</li>
          </ul>
        </div>
        <hr>
        <div class="project-card">
          <h3>Real-Time Chat Application</h3>
          <ul>
            <li>Developed a real-time chat application using WebSocket and JavaScript, supporting multiple users with a modern, responsive interface for an engaging messaging experience.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr>
    <!-- Recommendations -->
    <section id="recommendations" class="container">
      <h2>Recommendations</h2>
      <div class="all_recommendations" id="all_recommendations">
        <div class="recommendation">
          <span>&#8220;</span>
          Working with Ezel has been an absolute pleasure.
           She has an impressive ability to translate complex 
           ideas into user-friendly web applications with creativity 
           and precision.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          Working with Ezel has been an awesome experience.
          She is highly knowledgeable and always goes the extra step to
          make sure everything is right.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          I had the opportunity to work closely with Ezel on several 
          web development projects, and she consistently exceeded expectations.      
          <span>&#8221;</span>
        </div>
      </div>
    </section>
    <hr>
    <!-- Recommendation Form -->
    <section id="contact" class="container">
    <div class="flex_center">
      <fieldset>
        <legend class="introduction">Leave a Recommendation</legend>          
        <input type="text" placeholder="Name (Optional)"> <br/>
        <textarea id="new_recommendation" cols="250" rows="10" placeholder="Message"></textarea>
        <div class="flex_center">
          <button id="recommend_btn" onclick="addRecommendation()">Submit</button>
        </div>
      </fieldset>
    </div>
  </section>
  <div id="popup" class="popup">
    <div class="checkmark">&#10003;</div>
    <p>Thanks for leaving recommendation!</p>
    <button onclick="showPopup(false)">Ok</button>
  </div>
 <!-- Scroll-to-top button -->
    <a href="#home" class="scroll-to-top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>   
         </a>

          <script src="script.js"></script> 
</body>
</html>
