count1 = 0;
count2 = 0;

let home = document.getElementById('home-score');
let guest = document.getElementById('guest-score');

function btn1() {
    count1 += 1;
    home.textContent = count1;
}
function btn2() {
    count1 += 2;
    home.textContent = count1;
}
function btn3() {
    count1 += 3;
    home.textContent = count1;
}
function btn4() {
    count2 += 1;
    guest.textContent = count2;
}
function btn5() {
    count2 += 2;
    guest.textContent = count2;
}
function btn6() {
    count2 += 3;
    guest.textContent = count2;
}
function btn7() {
    count1 = 0;
    count2 = 0;
    guest.textContent = 0;
    home.textContent = 0;
}