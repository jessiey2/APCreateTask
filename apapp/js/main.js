import { songs } from "./albums";
console.log(songs);
let liked = [];
let disliked =[];
console.log(liked);
console.log(disliked);

const DOMSelectors = {
likenav: document.querySelector('.lsongs'),
dislikenav: document.querySelector('.dsongs'),
likebutton: document.getElementById("up"),
dislikebutton: document.getElementById("down"),
refreshbutton: document.getElementById("refresh"),
removel: document.getElementById("removel"),
removed: document.getElementById("removed"),
likedsection: document.querySelector('.likedsongs'),
dislikedsection: document.querySelector('.dislikedsongs'),
likeds: document.querySelector('.likeds'),
dislikeds: document.querySelector('.dislikeds'),
randoms: document.querySelector('.randoms'),
all: document.querySelector('.all-display'),

};

window.addEventListener("DOMContentLoaded", function() {
    displayrandom(songs);
    displayliked(liked);
    displaydisliked(disliked);
});

function displayrandom(songs) {
    let displayrandom = songs.map(function(card) {
        return `<article class="album-card" >
        <img class="img" src="${card.img}" alt="${card.alt}" />
        <div class="text-group">
          <div class="name">${card.name}</div>
          <div class="artist">${card.artist}</div>
        </div>
        <form target="_blank" action="${card.link}">
          <button class="button">Listen Now</button>
        </form>
        <div class="icons">
          <button id="up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
              />
            </svg>
          </button>
          <button id="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
              />
            </svg>
          </button>
          <button id="down" >
            <svg

              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>`
    });
    displayrandom = displayrandom.join("");
    DOMSelectors.randoms.innerHTML = displayrandom;
};

function displayliked(liked){
    let displayliked = liked.map(function(card){
        return `<article class="album-card" >
    <img class="img" src="${card.img}" alt="${card.alt}" />
    <div class="text-group">
      <div class="name">${card.name}</div>
      <div class="artist">${card.artist}</div>
    </div>
    <form target="_blank" action="${card.link}">
      <button class="button">Listen Now</button>
    </form>
    <button id="removel" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
      />
    </svg>
  </button>
  </div>
</article>`}
    );
    displayliked = displayliked.join("");
    DOMSelectors.likeds.innerHTML = displayliked;
};

function displaydisliked(disliked){
    let displaydisliked = disliked.map(function(card){
        return `<article class="album-card" >
    <img class="img" src="${card.img}" alt="${card.alt}" />
    <div class="text-group">
      <div class="name">${card.name}</div>
      <div class="artist">${card.artist}</div>
    </div>
    <form target="_blank" action="${card.link}">
      <button class="button">Listen Now</button>
    </form>
    <button id="removed" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
      />
    </svg>
  </button>
  </div>
</article>`}
    );
    displaydisliked = displaydisliked.join("");
    DOMSelectors.dislikeds.innerHTML = displaydisliked;
};

DOMSelectors.likenav.addEventListener('click', function() {
   var likedsection = document.querySelector('.likedsongs');
    if (likedsection.style.display === "block") {
        likedsection.style.display = "none";
      } else {
        likedsection.style.display = "block";
      }
});

DOMSelectors.dislikenav.addEventListener('click', function() {
    var dislikedsection = document.querySelector('.dislikedsongs');
     if (dislikedsection.style.display === "block") {
         dislikedsection.style.display = "none";
       } else {
         dislikedsection.style.display = "block";
       }
 });
 
 
 DOMSelectors.dislikebutton.addEventListener('click', function(card) {

 });
 DOMSelectors.likebutton.addEventListener('click', function(card) {

 });
 DOMSelectors.refreshbutton.addEventListener('click', function(card) {

 });
 DOMSelectors.removed.addEventListener('click', function(index) {

 });
 DOMSelectors.removel.addEventListener('click', function(index) {

 });
 
 
 