var sliderImgs = Array.from(document.querySelectorAll("#slider img"));
var slideCount = sliderImgs.length;
var currentSlide = 1;
let span = document.querySelector("#slider > span");

var next = document.getElementById("next");
var prev = document.getElementById("prev");

next.onclick = nextSlide;
prev.onclick = prevSlide;

var paginationEle = document.createElement("ul");
paginationEle.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slideCount; i++) {
  var paginationitem = document.createElement("li");
  paginationitem.setAttribute("data-index", i);
  paginationEle.appendChild(paginationitem);
};

document.getElementById("indecator").appendChild(paginationEle);

var paginationUl = document.getElementById("pagination-ul");
var paginationLi = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationLi.length; i++) {
  paginationLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker()
  }
}

checker()

function nextSlide() {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
};
function prevSlide() {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
};

function checker() {
  remActive()
  sliderImgs[currentSlide - 1].classList.add("active");
  paginationUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  if (currentSlide == slideCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
  let name = document.createElement("span");
  let statge = document.createElement("span");
  let matrial = document.createElement("span");

  name.textContent = document.querySelector("#slider .active").getAttribute("name");
  if (document.querySelector("#slider .active").hasAttribute("statge")) {
    statge.textContent = document.querySelector("#slider .active").getAttribute("statge");
  } else {
    statge.textContent = "";
  };
  matrial.textContent = document.querySelector("#slider .active").getAttribute("mat");
  span.appendChild(name);
  span.appendChild(matrial);
  span.appendChild(statge);
};

function remActive() {
  sliderImgs.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationLi.forEach(function (li) {
    li.classList.remove("active");
  });
  document.querySelectorAll("#slider > span > span").forEach(function (ele) {
    ele.remove()
  });
};