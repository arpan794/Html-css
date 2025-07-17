window.addEventListener('load', function () {
    setTimeout(() => {
      alert("Welcome to my website!");
    }, 100); // waits 100 milliseconds
  });

// const button = document.getElementById("clickMeBtn");
// button.addEventListener('click', function () {
//     alert('You clicked the button')
// });

// const button = document.getElementById("clickMeBtn");
// button.addEventListener('click', function () {
//     document.getElementById("aboutText").textContent = "Hello! I am learning how to build website using html and css"
// });

//---------------permanentaly change the text-----------
// function myFunc () {
//     document.getElementById("aboutText").textContent = "Hello! I am learning how to build website using html and css"
// };

//-----------------temporarily change the text-----------
function myFunc () {
    let element = document.getElementById("aboutText")
    let originalText = element.textContent;
    element.textContent = "Hello! I am learning how to build websites using HTML and CSS.";
    setTimeout(() => {
        element.textContent = originalText;
    },5000)
}

// ----------------- direct through element----------
// const toggleBtn = document.getElementById("toggleThemeBtn");

// toggleBtn.addEventListener("click", function () {
//     document.body.classList.toggle("dark-mode");
// });


function darkMode () {
   document.body.classList.toggle("dark-mode")
}


const name = prompt("What is your name?");
if (name) {
    alert("Nice to meet you, " + name + "!");
}
