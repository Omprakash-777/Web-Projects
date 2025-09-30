
let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "AC") {
            string = "";
            inputBox.value = "";
        } 
        else if (value === "Del") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } 
        else if (value === "=") {
            try {
                // string = eval(string); 
                // inputBox.value = string;
                inputBox.value= eval(inputBox.value);
            } catch {
                inputBox.value = "Error";
            }
            
        } 
        else {
            if(inputBox.value === "Error"){
                inputBox.value= "";
                string="";
            }
            string += value;
            inputBox.value = string;
        }
        
    });
});
