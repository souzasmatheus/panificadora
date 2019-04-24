// Variables & Constants
const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');
const comments = document.querySelectorAll('.comment-container');

// Helper functions
const isShown = element => {
  return element.classList.contains('show') ? true : false;
};

// Specific Functionality - Arrows
rightArrow.addEventListener('click', () => {
  for (let i = 0; i < comments.length; i++) {
    if (isShown(comments[i])) {
      if (i === comments.length - 1) {
        comments[i].classList.add('animated');
        comments[i].classList.add('bounceOutLeft');
        setTimeout(() => {
          comments[i].classList.remove('show');
          comments[i].classList.remove('animated');
          comments[i].classList.remove('bounceOutLeft');
          comments[0].classList.add('show');
          comments[0].classList.add('animated');
          comments[0].classList.add('bounceInRight');
        }, 1000);
        setTimeout(() => {
          comments[0].classList.remove('animated');
          comments[0].classList.remove('bounceInRight');
        }, 1500);
        return;
      } else {
        comments[i].classList.add('animated');
        comments[i].classList.add('bounceOutLeft');
        setTimeout(() => {
          comments[i].classList.remove('show');
          comments[i].classList.remove('animated');
          comments[i].classList.remove('bounceOutLeft');
          comments[i + 1].classList.add('show');
          comments[i + 1].classList.add('animated');
          comments[i + 1].classList.add('bounceInRight');
        }, 1000);
        setTimeout(() => {
          comments[i + 1].classList.remove('animated');
          comments[i + 1].classList.remove('bounceInRight');
        }, 1500);
        return;
      }
    }
  }
});

leftArrow.addEventListener('click', () => {
  for (let i = comments.length - 1; i >= 0; i--) {
    if (isShown(comments[i])) {
      if (i === 0) {
        comments[i].classList.add('animated');
        comments[i].classList.add('bounceOutRight');
        setTimeout(() => {
          comments[i].classList.remove('show');
          comments[i].classList.remove('animated');
          comments[i].classList.remove('bounceOutRight');
          comments[comments.length - 1].classList.add('show');
          comments[comments.length - 1].classList.add('animated');
          comments[comments.length - 1].classList.add('bounceInLeft');
        }, 1000);
        setTimeout(() => {
          comments[comments.length - 1].classList.remove('animated');
          comments[comments.length - 1].classList.remove('bounceInLeft');
        }, 1500);
        return;
      } else {
        comments[i].classList.add('animated');
        comments[i].classList.add('bounceOutRight');
        setTimeout(() => {
          comments[i].classList.remove('show');
          comments[i].classList.remove('animated');
          comments[i].classList.remove('bounceOutRight');
          comments[i - 1].classList.add('show');
          comments[i - 1].classList.add('animated');
          comments[i - 1].classList.add('bounceInLeft');
        }, 1000);
        setTimeout(() => {
          comments[i - 1].classList.remove('animated');
          comments[i - 1].classList.remove('bounceInLeft');
        }, 1500);
        return;
      }
    }
  }
});
