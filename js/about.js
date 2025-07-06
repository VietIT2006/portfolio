let tab_active = document.getElementsByClassName("tab_active")[0];
let skills = document.getElementsByClassName("skills-grid")[0];
let tab = document.getElementsByClassName("tab")[0];
let change = true;
function tab_active_change() {
  if (change) {
    // Kích hoạt tab Tech Stack
    tab_active.style.backgroundColor = "rgb(224, 103, 52)";
    tab_active.style.color = "black";
    tab.style.backgroundColor = "rgb(0, 0, 0)";
    tab.style.color = "rgb(224, 103, 52)";
    
    skills.innerHTML = `
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"><p>HTML</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"><p>CSS</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"><p>JavaScript</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"><p>PHP</p></div>
      <div class="skill-card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/285px-Laravel.svg.png" alt="Laravel"><p>Laravel</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="VueJS"><p>VueJS</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS"><p>NodeJS</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"><p>Bootstrap</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS"><p>ReactJS</p></div>
    `;
  } else {
    // Kích hoạt tab Tools
    tab.style.backgroundColor = "rgb(224, 103, 52)";
    tab.style.color = "black";
    tab_active.style.backgroundColor = "rgb(0, 0, 0)";
    tab_active.style.color = "rgb(224, 103, 52)";
    
    skills.innerHTML = `
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"><p>Git</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"><p>GitHub</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode"><p>VSCode</p></div>
      <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM"><p>NPM</p></div>
    `;
  }

  // Thêm hiệu ứng cho cả 2 tab
  setTimeout(() => {
    document.querySelectorAll(".skill-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add("fadeInLeft");
    });
  }, 100);
}


tab_active.addEventListener("click", function () {
  change = true;
  tab_active_change(); // Kiểm tra trong console
});
tab.addEventListener("click", function () {
  change = false;
  tab_active_change(); // Kiểm tra trong console
});
tab_active_change();
// tab_active_change();
