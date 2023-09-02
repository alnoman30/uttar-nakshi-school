window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,65);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 50);
    $("#num4").countMe(100,200);
 }


 const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})











const toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetText = document.getElementById(targetId);

        if (targetText.style.display === 'none' || targetText.style.display === '') {
            targetText.style.display = 'block'; // Show the text
        } else {
            targetText.style.display = 'none'; // Hide the text
        }
    });
});