const words = ["Developer        ", "Engineer        "];
let i = 0;
let timer;

window.onscroll = function() {stickyNav()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function stickyNav() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 15);
  };
  loopDeleting();
};



typingEffect();


