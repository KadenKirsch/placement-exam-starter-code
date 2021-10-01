// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Kaden Kirsch" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Ginger bread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons


let gbMinBtn = document.querySelector("#minus-gb")
let gbAddBtn = document.querySelector("#add-gb")
let gbTbRow = document.querySelector("#qty-gb")

let totalTbRow = document.querySelector("#qty-total")


gbMinBtn.addEventListener("click",function(){
    gb = gb - 1;
    gbTbRow.textContent = gb;

    if(gb <= 0){
        (gb = 0)
    }

    totalTbRow.textContent = gb + cc + sugar;
});

gbAddBtn.addEventListener("click",function(){
    gb = gb + 1;
    gbTbRow.textContent = gb;

    totalTbRow.textContent = gb + cc + sugar;
});




let ccMinBtn = document.querySelector("#minus-cc")
let ccAddBtn = document.querySelector("#add-cc")
let ccTbRow = document.querySelector("#qty-cc")

ccMinBtn.addEventListener("click",function(){
    cc = cc - 1;
    ccTbRow.textContent = cc;

    if(cc <= 0){
        (cc = 0)
    }

    totalTbRow.textContent = gb + cc + sugar;
});

ccAddBtn.addEventListener("click",function(){
    cc = cc + 1;
    ccTbRow.textContent = cc;

    totalTbRow.textContent = gb + cc + sugar;
});




let sugarMinBtn = document.querySelector("#minus-sugar")
let sugarAddBtn = document.querySelector("#add-sugar")
let sugarTbRow = document.querySelector("#qty-sugar")

sugarMinBtn.addEventListener("click",function(){
    sugar = sugar - 1;
    sugarTbRow.textContent = sugar

    if(sugar <= 0){
        (sugar = 0)
    }

    totalTbRow.textContent = gb + cc + sugar;
});

sugarAddBtn.addEventListener("click",function(){
    sugar = sugar + 1;
    sugarTbRow.textContent = sugar

    totalTbRow.textContent = gb + cc + sugar;
});



