
// SideMenu function

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// search bar 
function openSearchBar() {
    const searchBar = document.getElementById("search-bar-back")
    searchBar.style.display = 'flex';
}
// Function to close the search bar when clicking outside of it
window.onclick = function (e) {
    if (e.target !== searchBar) {
        searchBar.style.display = 'none';
    }
};

let searchBar = document.getElementById("search-bar-back")
let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icontwo = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");


// search bar 
function openSearchBar() {
    searchBar.style.display = 'flex';
}
// Function to close the search bar when clicking outside of it
window.onclick = function (e) {
    if (e.target !== searchBar) {
        searchBar.style.display = 'none';
    }
};

//show dropdown list on click on dropdown btn
dropdownBtn.onclick = function () {
    //rotate arrow icon
    if (list.classList.contains("show")) {
        icontwo.style.rotate = "0deg";
    }
    else { icontwo.style.rotate = "-180deg" }
    list.classList.toggle('show');
};
//hide dropdown list when clicked outside dropdown btn
window.onclick = function (e) {
    if (
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon"
    ) {
        list.classList.remove('show');

        icontwo.style.rotate = "0deg";
    }
};

for (item of listItems) {
    // change  dropdownBtn text on click on selected listitems
    item.onclick = function (e) {
        span.innerText = e.target.innerText;

        //change input placeholder text onselected item
        if (e.target.innerText == "Everything") {
            input.placeholder = "Search Anything..."
        } else {
            input.placeholder = "Search in " + e.target.innerText + "..."

        }
    };
}




// login-registration page opener

function openLoginPage() {
    const loginPage = document.getElementById("registerModal")
    loginPage.style.display = 'flex';

    const login = document.getElementsByClassName("log-in_form")[0];
    login.style.display = 'flex';

}

function hideLoginPage() {
    const loginPage = document.getElementById("registerModal")
    loginPage.style.display = 'none';
}

function openSignUp() {
    const signUp = document.getElementsByClassName("register_form")[0];
    signUp.style.display = 'flex';

    const closeLogin = document.getElementsByClassName("log-in_form")[0];
    closeLogin.style.display = 'none';
}

function openLogin() {
    const login = document.getElementsByClassName("log-in_form")[0];
    login.style.display = 'flex';

    const signUp = document.getElementsByClassName("register_form")[0];
    signUp.style.display = 'none';

}
// login form with values

let loginPanel = document.getElementById("loginPage")
loginPanel.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.value)
    const formData = new FormData(event.target);
    console.log(formData)
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
});




// Registration form with  characteristics

var registerPanel = document.getElementById("registrationForm")
registerPanel.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target.value)
    const formData = new FormData(event.target);
    console.log(formData)
    formProps = Object.fromEntries(formData);
    console.log(formProps)
});

// Email function

// password with same characteristics


document.getElementById("registrationForm").addEventListener('submit', function (event) {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const passwordMatchError = document.getElementById('passwordMatchError');
    if (password1 !== password2) {
        passwordMatchError.style.display = 'block';
        event.preventDefault(); // Prevent form submission
    } else {
        passwordMatchError.style.display = 'none';
    }
})





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
    sendEmail(formProps)

});
function sendEmail(props) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "khondamiryunus@gmail.com",
        Password: "13493AE8782E0CD1D322605987D40AEC25F7",
        // Fullname: "fullName",
        // Contact: "telNumber",
        To: "khondamiryunus@gmail.com",
        From: "xondamiry@gmail.com",
        Subject: "Mail from website",
        Body: "Hi"

    }).then(
        message => alert(`${message} Form Submit`)
    );


}





// Calendarrrrr

let date = new Date(); // creates a new date object with the current date and time
let year = date.getFullYear(); // gets the current year
let month = date.getMonth(); // gets the current month (index based, 0-11)

const day = document.querySelector(".calendar-dates"); // selects the element with class "calendar-dates"
const currdate = document.querySelector(".calendar-current-date"); // selects the element with class "calendar-current-date"
const prenexIcons = document.querySelectorAll(".calendar-navigation span"); // selects all elements with class "calendar-navigation span"

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]; // array of month names

// function to generate the calendar
const manipulate = () => {
    // get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = ""; // variable to store the generated calendar HTML

    // loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit += `<li  class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
        // check if the current date is today
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        const clickedDate = `${i} ${months[month]} ${year}`;
        console.log('clickedDate: ', clickedDate);
        lit += `<li onclick="openCalendarModal('${clickedDate}')" class="${isToday}">${i}</li>`;
    }

    // loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // update the text of the current date element with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element with the generated calendar
    day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {
        // Check if the icon is "calendar-prev" or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {
            // Set the date to the first day of the month with the new year
            date = new Date(year, month, new Date().getDate());
            // Set the year to the new year
            year = date.getFullYear();
            // Set the month to the new month
            month = date.getMonth();
        }

        else {
            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to update the calendar display
        manipulate();
    });
});


// // CalendarMOdal

const selectedDate = document.getElementById("selectedDate")

function openCalendarModal(dayNumber) {
    console.log('dayNumber...', dayNumber);
    selectedDate.innerText = dayNumber
    let calendarModal = document.getElementById('calendarModal')
    calendarModal.style.display = 'flex'
    highlightDay(dayNumber)
};
function closeCalendarModal() {
    let calendarModal = document.getElementById('calendarModal')
    calendarModal.style.display = 'none'

};


var eventDetail = document.getElementById("event-recorder")
eventDetail.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target.value)
    const formData = new FormData(event.target);
    console.log(formData)
    formProps = Object.fromEntries(formData);
    console.log(formProps)

    highlightDay(formProps)
});
function highlightDay(dayNumber, formProps) {
    console.log('hello world')
    let highlightDay = document.querySelector('i')
    highlightDay.style.color = 'red'
}
console.log('highlightDay');





// const age = prompt("Enter your age");
// if (age <= 5) {
//     console.log("You are a child");
// }


// if (age <= 10) {
//     console.log("you need to pay $10")
// }
// else if (age <= 65) { console.log("YOu should pay $20") }
// else { console.log("you should pay 10") }


// const userInput = prompt("Enter anything")
// if (1) {
//     console.log("TRUTHY!")
// }
// else { console.log("FALSY!") }