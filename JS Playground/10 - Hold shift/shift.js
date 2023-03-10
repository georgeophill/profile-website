// give variable to each item and turn into an array
const boxes = Array.from(document.querySelectorAll('.inbox .item [type="checkbox"]'));
let lastChecked;

function handleClick(e) {
  // check if they had the shift key down
  // check that they are echecking it
  let inBetween = false;
  if(e.shiftKey && this.checked) {
  // loop over every single check box
  boxes.forEach(box => {
    if(box === this  || box === lastChecked) {
      inBetween = !inBetween
      }
      if(inBetween) {
        box.checked = true
      }
    });
  }
    lastChecked = this;
  }

boxes.forEach(item => item.addEventListener('click', handleClick));
