// slectors
const selectLevel = document.querySelector(".select-level");
const levelName = document.querySelector(".level-name");
const Socend = document.querySelector(".socend");
const remainingSeconds = document.querySelector(".remaining-seconds");
const btnStart = document.querySelector(".btn-Start");
const btnText = document.querySelector(".btn-text");
const arrWords = document.querySelector(".arr-words");
const scoreSpan = document.querySelector(".score-span");
const stopGame = document.querySelector(".stop");
var wordsTimer = 5000,
    timer = 0,
    score = 0,
    count = 0,
    test = 0;

// object of all arr
const difficult = {
  easy: [
    "Hello", "Easy", "Say", "Welcome", "Funny", "Happy", "Solve", "Reject", "Accept", "Win", "Title", "Score", "Type",
    "Above", "Across", "Address", "Affect", "Agency", "Alone", "Always", "Appear", "Arrive", "Around", "Author", "Close", "College", "Color",
    "Dome", "Death", "Develop"
  ],
  normal: [
    "Development", "Programming", "Discussion", "Environment", "Experience", "Generation", "Information", "International", "Management", "Organization",
    "Performance", "Professional", "Relationship", "Responsibility", "Understand", "Traditional", "Throughout", "Administration", "Commercial", "Conference",
    "Establish", "Circumstances", "Convention", "Distinction", "Disposition", "Notwithstanding", "Substantial", "Conspicuous", "Extravagant", "Philosophical"
  ],
  hard: [
    "I have driven a car", "Do you play basketball", "They have a computer", "Did he cook dinner", "They broke the glass",
    "We have won the match", "They talk too much", "I run every weekend", "Does he drink coffee", "She buys the car",
    "I like to draw pictures", "We love flying kites", "He has a big house", "Dog barks loudly", "I like comics books"
  ]
};
///onchange function
selectLevel.onchange = function update() {
   /// if to castam timer
  if (selectLevel.value == "hard") {
    wordsTimer = 15000
    var timerWords = 15
    test = 15
  }
  if (selectLevel.value == "easy") {
    wordsTimer = 5000
    var timerWords = 5
    test = 5
  }
  if (selectLevel.value == "normal") {
    wordsTimer = 10000
    var timerWords = 10
    test = 10
  }
  /// varibles for arr 
  var arrLevel = selectLevel.value
  levelName.innerHTML = arrLevel
  var arrNamr = difficult[arrLevel];
  var arrlength = arrNamr.length
  var outer = arrNamr.length
  // on click function
  btnStart.onclick = function amr() {
    btnStart.style.display = "none";
    stopGame.style.display = "block";
    // timer to word
    var downloadTimer = setInterval(function () {
      if (count % test == 0) {
        if (arrlength == 0) {
          clearInterval(download);
          arrWords.innerHTML = "Your score  " + score + " from " + outer;
          btnText.value = ""
        } else {

          if (arrLevel = arrNamr) {
            var randomNum = Math.floor(Math.random() * arrlength)
            var item = arrNamr[randomNum];
            arrWords.innerHTML = item;
            arrNamr.splice(randomNum, 1)[0];
            setInterval(downloadTimer);
            btnText.value = ""
            btnText.onkeyup = function () {
              if (arrWords.innerHTML.toLowerCase() == btnText.value.toLowerCase()) {

                scoreSpan.innerHTML = score += 1
              }
            }
          }
          arrlength -= 1
        }

      }
      if (timer >= test + 1) {
        clearInterval(downloadTimer);
      } else {

        Socend.innerHTML = timerWords - timer;
        timer += 1
        count++;
      }

    }, 1000);
     /// timer for rebet timer-one
    var download = setInterval(function () {
      if (arrlength == 0) {
        clearInterval(download);
        arrWords.innerHTML = "Your score  " + score + " from " + outer;
        btnText.value = ""
      } else {

        timer = 0
      }

    }, wordsTimer);

  }

}

//// to reload page
stopGame.onclick = function () {
  window.location.reload()

}
/// for dark and light mode localStorage
document.body.classList.add(localStorage.getItem("page") || "dark")
var el = document.querySelectorAll(".color_switch li");
el[1].classList.add("thenightbuton");

if (document.body.className === "light") {
  el[1].style.display = "none";

}
if (document.body.className === "dark") {
  el[0].style.display = "none"
}
el[0].addEventListener("click",
  function () {
    el[0].style.display = "none"
    el[1].style.display = "block"
    document.body.classList.remove("light");
    document.body.classList.add(this.getAttribute("dete_color"));
    btnText.classList.add("dark-shadow");
    btnText.classList.remove("light-shadow");
    localStorage.setItem("page", this.getAttribute("dete_color"))

  }, false
)

el[1].addEventListener("click",
  function () {
    el[1].style.display = "none"
    el[0].style.display = "block"
    document.body.classList.remove("dark");
    document.body.classList.add(this.getAttribute("dete_color"));
    el[1].classList.add("thenightbuton");
    localStorage.setItem("page", this.getAttribute("dete_color"))
    btnText.classList.remove("dark-shadow");
    btnText.classList.add("light-shadow");

  }, false
)