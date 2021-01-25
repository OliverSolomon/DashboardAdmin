// button for switching modes
var darkMode = document.getElementById("darkMode");
// elements
var body = document.querySelector("body");
var addBtn = document.getElementById("add");
var navLi1 = document.getElementById("navLi1");
navLi1.addEventListener("mouseover", hover);
var navLi2 = document.getElementById("navLi2");
var navLi3 = document.getElementById("navLi3");
// var navList = document.getElementsByClassName("navLi");
// var cards = document.addEventListener("mouseover", myScript);

// navList[1].addEventListener("mouseover", hover);

function darkness() {
    // console.log('Meeee');
    body.classList.toggle('dark');
    addBtn.classList.toggle('dark');
    navLi1.classList.toggle('darkList');
    navLi2.classList.toggle('darkList');
    navLi3.classList.toggle('darkList');
    // navLi1.style.color = '#FF6B00';
    // navLi2.style.color = '#FF6B00';
    // navLi3.style.color = '#FF6B00';
    // console.log(navList);
    // for (var i = 0; i <= navList.length; i++) {
    //     console.log(navList[i])
    //         // navList[i].classList.toggle('darkLst');
    // }

}

function hover() {
    // cards.classList.toggle('darkHover')
    // alert('gotcha')
    // navLi1.style.backgroundColor = '#60FF9F';
}