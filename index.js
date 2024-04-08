const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left || 0, 10);
    const newLeft = left - 1;
    dodger.style.left = `${newLeft}px`;
}

   
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
        }
    });

    function moveDodgerRight() {
        const dodger = document.getElementById("dodger");
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
      
        if (left < window.innerWidth - dodger.offsetWidth) {
          dodger.style.left = `${left + 1}px`;
        }
      }


      document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowRight") {
          moveDodgerRight();
        }
      });

document.addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){
        moveDodgerLeft();
    
}


if(event.key === "ArrowRight"){
    moveDodgerRight();
}
});