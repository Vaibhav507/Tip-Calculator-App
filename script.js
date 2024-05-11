let tipAmount;
let billValue;
let peopleValue=1;

const billAmount = document.getElementById("bill-amount");
const totalAmount = document.querySelector(".total-amount");
const people = document.getElementById("people-amount");
const tipTotal = document.querySelector(".tip-amount");
const tipCustom = document.getElementById("tip-amount-custom");
const resetButton = document.querySelector(".reset")


const button5 = document.querySelector(".button5");
const button10 = document.querySelector(".button10");
const button15 = document.querySelector(".button15");
const button25 = document.querySelector(".button25");
const button50 = document.querySelector(".button50");

button5.addEventListener("click",()=> {
    tipAmount=5;
    resetButton.classList.add("active");
    button5.classList.toggle("active"); 
})
button10.addEventListener("click",()=> {
    tipAmount=10;
    resetButton.classList.add("active");
    button10.classList.toggle("active");
})
button15.addEventListener("click",()=> {
    tipAmount=15;
    resetButton.classList.add("active");
    button15.classList.toggle("active");
})
button25.addEventListener("click",()=> {
    tipAmount=25;
    resetButton.classList.add("active");
    button25.classList.toggle("active");
})
button50.addEventListener("click",()=> {
    tipAmount=50;
    resetButton.classList.add("active");
    button50.classList.toggle("active");
})

billAmount.addEventListener("input", function(event) {
    billValue = parseFloat(event.target.value);
    resetButton.classList.add("active");       
});

tipCustom.addEventListener("input", function(event) {
    tipAmount = parseFloat(event.target.value);
    resetButton.classList.add("active");       
});

billAmount.addEventListener("input", function(event) {
    billValue = parseFloat(event.target.value);
    resetButton.classList.add("active");       
});
    
people.addEventListener("input", function(event) {
    peopleValue = parseFloat(event.target.value);

    let tip = (billValue*tipAmount)/100;
    tipTotal.textContent=(tip/peopleValue).toFixed(2);
    totalAmount.textContent=((billValue+tip)/peopleValue).toFixed(2);
    resetButton.classList.add("active");
});

resetButton.addEventListener("click" ,() => {
    location.reload();
})





    






