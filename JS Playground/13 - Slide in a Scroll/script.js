console.log("hello")

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');


function checkSlide(e) {
  images.forEach(slideImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2 ;
    // botttom of the image
    const imageBottom = sliderImage.offSetTop + sliderImage.height;
  });
}

// images.forEach(image => image.addEventListener('scroll', check1Slide()))

window.addEventListener('scroll', debounce(checkSlide))
