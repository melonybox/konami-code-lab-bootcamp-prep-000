const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const input = document.getElementsByTagName('body');

function init() {
  
  input.addEventListener('keydown', function(event) {
    const key = event.key;
    let i = 0;
    if ( key === codes[i] ) {
      i++;
      if ( i === codes.length ) {
        alert('A winner is you!');
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}