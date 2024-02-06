
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}







var coll = document.getElementsByClassName("collapsible");

for (let index = 0; index < coll.length; index++) {
    const element = coll[index];
    element.addEventListener("click", myFunc);

}

function myFunc(e) {
    console.log('workig...');
    e.target.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}








// Get the button and the value span
const counterBtn = document.getElementById('counter');
const valueSpan = document.getElementById('value');

// Set initial value
let counterValue = parseInt(valueSpan.innerText);

// Add event listeners to increment and decrement buttons
document.getElementById('increment').addEventListener('click', () => {
    counterValue++;
    valueSpan.innerText = counterValue;
});

document.getElementById('decrement').addEventListener('click', () => {
    counterValue--;
    valueSpan.innerText = counterValue;
});


