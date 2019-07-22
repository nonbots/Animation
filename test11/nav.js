var dialogue = ['1', '2', '3'];

function changeText() {
    var timer = 0;
    for (let i = 0; i < dialogue.length; i++) {
        setTimeout(function () {
            document.getElementById('h1').innerHTML = dialogue[i];
        }, timer);
        timer = (timer + 1000);
    }
    setTimeout(newUserInput, 4000);
}

function newUserInput() {

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "textInput");
    input.setAttribute("value", "");
    input.setAttribute("placeholder", "Type then press \"Enter\"");
    input.setAttribute("maxLength", "28");
    input.setAttribute("size", "28");
    var parent = document.getElementById("inputDiv");
    parent.appendChild(input);
    parent.style.borderStyle = 'solid';
    parent.style.width = '50%'
    parent.style.position = 'absolute';
    parent.style.left = '50%';
    var question = '4';
    document.getElementById('h1').innerHTML = question;

    function pressEnter() {
        function displayGrow() {
            var userName = input.value;
            if (event.keyCode == 13) {

                setTimeout(function () {
                    parent.style.display = 'none';
                }, 0);
                setTimeout(function () {
                    document.getElementById('h1').innerHTML = "5" +
                        " " + userName + "!";
                }, 1000);
                setTimeout(function () {
                    document.getElementById('h1a').style.display = 'grid';
                    document.getElementById('h1a').style.opacity = '1';
                    document.getElementById('container').style.display = "block";
                }, 2000);
            }
        }
        displayGrow();
        input.addEventListener("keyup", pressEnter);
    }
    Grow();
}


// function grow() {
//     var growText = document.getElementById("textnew");
//     growText.classList.add("text1");
//     growText.setAttribute("dx", -35);
//     growText.setAttribute("dy", 10);
//     function load() {
//         window.location.href = "home.html";
//     }
//     setTimeout(load, 2500);
// }

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         var mobileText = document.getElementById("textnew")
//         mobileText.setAttribute("dx", 120);
//         mobileText.setAttribute("dy", 600);
//     }
// }
// var x = window.matchMedia("(max-width: 5.5in)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
// changeText();
function Grow() {
    function grow(x) {
        if (x.matches) {

            var growText = document.getElementById("textnew");
            growText.classList.add("text1");
            growText.setAttribute("dx", 120);
            growText.setAttribute("dy", 10);
            loadHome();

        } else {

            var growText = document.getElementById("textnew");
            growText.classList.add("text1");
            growText.setAttribute("dx", -32.5);
            growText.setAttribute("dy", 10);
            loadHome();
        }

        function loadHome() {
            function load() {
                window.location.href = "home.html";
            }
            setTimeout(load, 2500);
        }
    }
    var x = window.matchMedia("(max-width: 5.5in)")
    grow(x); // Call listener function at run time
    x.addListener(grow); // Attach listener function on state changes
}
changeText();