const output = document.getElementById("output");
const outputFooter = document.getElementById("output-footer");

const backNav = document.querySelector("#back-nav");
const forwardNav = document.querySelector("#forward-nav");
let jsonData;
let jsonDatalength;
let index = 0;
function slide() {
  let html = ` <div class="myModal" style="display: none;">
    <div class="modal-inner"><span style="color: rgb(255, 255, 255);">
        <h5>Close</h5></span><img src=${jsonData[
          index
        ].images.hero.small.toString()} alt="">
    </div>
</div>
<div class="gallery-details">
    <div class="gallery-image">
        <img src=${jsonData[
          index
        ].images.hero.large.toString()} alt="" class="artist">
        <div class="img-tag"><img src="./assets/shared/icon-view-image.svg" alt="">
            <h1>VIEW IMAGE</h1>
        </div>
    </div>
    <div class="gallery-name">
        <h1>${jsonData[index].name}</h1>
        <p>${jsonData[index].artist.name}</p>
    </div>
    <div class="gallery-artist">
        <img src=${jsonData[index].artist.image.toString()} alt="">
    </div>
</div>
<div class="artist-message">
    <h1>${jsonData[index].year}</h1>
    <div class="artist-text">
        <p>${jsonData[index].description}</p>
         <a href=${
           jsonData[index].source
         } target="source" class="source-link" rel="noreferrer">GO TO SOURCE</a>
    </div>
</div>`;

  let footerHtml = `<h1>${jsonData[index].name}</h1>
  <p>${jsonData[index].artist.name}</p>
  `
  output.innerHTML = html;
  outputFooter.innerHTML = footerHtml
}
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    jsonDatalength = data.length;
    slide();
  });

backNav.addEventListener("click", () => {
  if (index === 0) {
    index = 0;
  } else {
    index = index - 1;
  }
  slide();
});

forwardNav.addEventListener("click", () => {
  if (index === jsonDatalength - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  slide();
});



function showModal(img) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modal.firstChild.src = img.src;
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function openSlideshow() {
  window.location.href = "index.html";
}

function move(progressBar, progress, value) {
  progress.style.width = value + "%";
  progressBar.setAttribute("aria-valuenow", value);
  progressBar.style.width = value + "%";
}
const progressBar = document.querySelector(".progressBar");
const progress = document.getElementById("progress");
move(progressBar, progress, 50);
