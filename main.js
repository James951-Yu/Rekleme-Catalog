
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




// Collapsible

const opts = document.querySelectorAll('.content-1 h4')
const btn = document.getElementById('collapse')
const cnt = document.querySelector('.content')

opts.forEach(e => {
    e.addEventListener('click', () => {
        btn.textContent = e.textContent
        cnt.style.display = "none";
    })
})


// adding item numbers 

const counterBtn = document.getElementById('counter');
const valueSpan = document.getElementById('value');

let counterValue = parseInt(valueSpan.innerText);

document.getElementById('increment').addEventListener('click', () => {
    counterValue++;
    valueSpan.innerText = counterValue;
});

document.getElementById('decrement').addEventListener('click', () => {
    counterValue--;
    valueSpan.innerText = counterValue;
});


// modal-popup


function showModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
}
function hideModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'none'
}





// Call-Center-concerns-Popup

function submitBtn() {
    const modaltwo = document.querySelector('.modaltwo')
    modaltwo.style.display = 'block'
}
function closeBtn() {
    const modaltwo = document.querySelector('.modaltwo')
    modaltwo.style.display = 'none'
}

