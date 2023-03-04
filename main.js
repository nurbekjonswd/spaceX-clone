const btn = document.getElementById("btn-menu");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", callToggle);
document.addEventListener("scroll", scrollUp);

function callToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-showing");
  menu.classList.toggle("show-menu");
}

function scrollUp() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = counter.getAttribute("data-target");
      //counter text//
      const c = +counter.innerText;
      //create an increment//
      const increment = target / 10;
      //if counter less than target //
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
