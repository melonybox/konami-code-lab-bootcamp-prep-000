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

function init() {
  const input = document.body;
  
  input.addEventListener('keydown', function(event) {
    let key = event.key;
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

init()