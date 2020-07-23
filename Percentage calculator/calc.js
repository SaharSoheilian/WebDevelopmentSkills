var numField1 = document.getElementById('numField1'); 
var numField2 = document.getElementById('numField2'); 
var resultField = document.getElementById('resultField');
// the form is ganna listen for an event (the button to be clicked), so we grab the form here
var form = document.getElementById('xIsWhatPercentOfY'); 



//just for check: js is linked to our page and we can set the values for elements
// numField2.value = "Hey Sahar!"; //use .value for input element
// resultField.innerText = "result"; //use .innerText for headers and paragraphs

form.addEventListener('submit', function(event){
    if (!numField1.value || !numField2.value){
        alert("Please enter values in the fields.")
    }
    else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        resultField.innerText = "Answer: " + x / y * 100 + "%";
        
        // forms submit will referesh the page as a default behavior so here we say:
        // don't referesh the page!!
        event.preventDefault(); 
    }
})

//if you want to work with button element onclick() function
function myOnClicker(){
    resultField.innerText = numField1.value + numField2.value
}



