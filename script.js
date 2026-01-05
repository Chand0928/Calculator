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
                string = eval(string);
                if (isNaN(string) || string === Infinity || string === -Infinity) {
                    throw new Error("Invalid Calculation");
                }
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = ""; 
            }
        } 
        else if (buttonText.toLowerCase() === "c") {
            string = "";
            document.querySelector('input').value = string;
        } 
        else {
            if (["+", "-", "*", "/"].includes(buttonText) && !string) {
                return;
            }
            if (buttonText === "." && string.endsWith(".")) {
                return;
            }
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});


