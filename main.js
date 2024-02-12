
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

const opts = document.querySelectorAll('.content-one h4')
const btn = document.getElementById('collapse')
const cnt = document.querySelector('.content')

let text

opts.forEach(e => {
    e.addEventListener('click', () => {
        btn.textContent = e.textContent
        cnt.style.display = "none";
        text = e.textContent;
    })
});



// adding item numbers 

const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const valueInput = document.getElementById('value');

// Add click event listeners to the buttons
decrementBtn.addEventListener('click', () => {
    // Decrement the value if it's greater than 0
    if (parseInt(valueInput.value) > 0) {
        valueInput.value = parseInt(valueInput.value) - 1;
    }
});

incrementBtn.addEventListener('click', () => {
    // Increment the value
    valueInput.value = parseInt(valueInput.value) + 1;
});

let color = document.getElementById('color');
// let newprice = document.getElementById('newprice');

console.log('text-content', color)

let formProps


// Form submit for Sublimaton mugv
// Form submit for Sublimaton mugv
var form = document.getElementById("form")
console.log('working...')
form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target.value)
    const formData = new FormData(event.target);
    console.log(formData)
    formProps = Object.fromEntries(formData);
    console.log(formProps)
    if (formProps) {
        color.textContent = formProps.color
    }
    else {
        color = 'default'
    }


    if (formProps) {
        view.textContent = formProps.view
    }
    else {
        view = 'default'
    }


    if (formProps) {
        console.log(method)
        method.textContent = formProps.method
    }
    else {
        method = 'default'
    }

    // console.log(delivery)

    if (formProps) {
        console.log(newprice)
        newprice.textContent = formProps.price
    }
    else {
        newprice = 'default'
    }


    if (formProps) {
        quantity.textContent = formProps.quantity
    } else {
        quantity = 'default'
    }

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


// submitform

let contactForm = document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(event.target.value)
    const formData = new FormData(event.target);
    console.log(formData)
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

})


