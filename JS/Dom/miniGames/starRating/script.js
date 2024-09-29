const starsContainer = document.querySelector('#star-container');
const allStars = document.querySelectorAll('.star');
const counter = document.getElementById('count');
let selectedStarIndex = 0;

starsContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('star')) {
    const hoveredStarIndex = e.target.dataset.index;
    fillStarRating(hoveredStarIndex);
  }
});

starsContainer.addEventListener('mouseleave', () => {
  fillStarRating(selectedStarIndex);
});

starsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('star')) {
    const clickedStarIndex = e.target.dataset.index;
    selectedStarIndex = clickedStarIndex;
    fillStarRating(selectedStarIndex);
    counter.innerText = selectedStarIndex;
  }
});

function fillStarRating(selectedStarIndex) {
  resetRating();
  for (let i = 0; i < selectedStarIndex; i++) {
    allStars[i].classList.add('star-filled');
  }
}

function resetRating() {
  allStars.forEach((star) => {
    star.classList.remove('star-filled');
  });
}
