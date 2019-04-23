// Variables & Constants
const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');
const comments = document.querySelectorAll('.comment-container');

// Helper functions
const isShown = element => {
  return element.classList.contains('show') ? true : false;
};

// Specific Functionality
rightArrow.addEventListener('click', () => {
  for (let i = 0; i < comments.length; i++) {
    if (isShown(comments[i])) {
      comments[i].classList.remove('show');
      if (i === comments.length - 1) {
        comments[0].classList.add('show');
        return;
      } else {
        comments[i + 1].classList.add('show');
        return;
      }
    }
  }
});

leftArrow.addEventListener('click', () => {
  for (let i = comments.length - 1; i >= 0; i--) {
    if (isShown(comments[i])) {
      comments[i].classList.remove('show');
      if (i === 0) {
        comments[comments.length - 1].classList.add('show');
        return;
      } else {
        comments[i - 1].classList.add('show');
        return;
      }
    }
  }
});