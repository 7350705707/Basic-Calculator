let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
            return;
        }else if(e.target.innerHTML == "X") {
            string = string + "*";
            return document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "C") {
            string = "";
            return document.querySelector("input").value = string;
            return;
        }
            
    string = string + e.target.innerHTML;

    document.querySelector("input").value = string;

    });

});

