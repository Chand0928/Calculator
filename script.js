// let string = "";
// let buttons = document.querySelectorAll('.button')
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML =="="){
//             string = eval(string);
//             document.querySelector('input').value = string;

//         }
//         else if(e.target.innerHTML == "c"){
//             string = ""
//             document.querySelector('input').value = string;

//         }
//         else{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//             }
//     })
// })



let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === "=") {
            try {
                // Attempt to evaluate the expression
                string = eval(string);
                if (isNaN(string) || string === Infinity || string === -Infinity) {
                    throw new Error("Invalid Calculation");
                }
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = ""; // Clear the string for new input after error
            }
        } 
        else if (buttonText.toLowerCase() === "c") {
            string = "";
            document.querySelector('input').value = string;
        } 
        else {
            // Prevent invalid characters
            if (["+", "-", "*", "/"].includes(buttonText) && !string) {
                // Disallow starting with an operator
                return;
            }
            if (buttonText === "." && string.endsWith(".")) {
                // Prevent multiple dots in a number
                return;
            }
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});




//  make m+ M- and Mc Function al