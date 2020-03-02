// function sellUn() {
//     document.getElementById('second').className = "drugi"
// }
// sellUn();

// function selAl() {
//     var elements = document.getElementsByTagName('li');

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].className = "list"
//     }
// }
// selAl();

// function upper() {
//     var b = document.querySelectorAll("#third li");
//     for (var i = 0; i < b.length; i++) {
//         b[i].className = "new-list"
//     }

// }
// upper()

// function select() {
//     var a = document.querySelector(".active");
//     a.className = "";
//     var b = a.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
//     b.className = "active"

// }
// // select()

// function navg() {
//     var a = document.querySelector("#nav")
//     var b = a.firstElementChild.textContent
//     alert(b);
// }
// navg();

// function replace(text) {
//     var c = document.querySelector("#nav")
//     var d = c.lastElementChild.textContent = text;
// }
// replace("Hello");

// function drop(data) {
//     var body = document.querySelector("body");
//     var element = document.createElement("select");
//     var data = ["Huawei", "Samsung", "Xiaomi", "Sony"];
//     for (var i = 0; i < data.length; i++) {
//         var opt = document.createElement("option");
//         opt.textContent = data[i];
//         element.appendChild(opt)
//     }
//     body.appendChild(element);
// }
// drop()

// function addEl(type, label, required) {
//     var formE = document.querySelector("form");
//     var labelE = document.createElement("label");
//     var inputE = document.createElement("input");
//     var textE = document.createTextNode(label);

//     inputE.setAttribute("type", type);
//     labelE.appendChild(textE);
//     if (required) {
//         inputE.setAttribute("required", "required");
//     }

//     formE.appendChild(labelE);
//     formE.appendChild(inputE);

// }
// addEl("text", "First Name");
// addEl("email", "Email", true);

// function subm() {
//     var formE = document.querySelector("form");
//     var sub = document.createElement("button");
//     var textS = document.createTextNode("Submit")

//     sub.appendChild(textS);

//     formE.appendChild(sub);
// }
// subm();

function slideBite(imgs) {
    var slider = document.querySelector(".slide");
    for (var i = 0; i < imgs.length; i++) {
        var img = document.createElement("img")
        img.setAttribute("src", imgs[i]);
        slider.appendChild(img);
    }
    slider.firstElementChild.className = "active";
}
slideBite(["slike/slika_1.jpg", "slike/slika_2.jpg", "slike/slika_3.jpg"]);

function slide() {
    var active = document.querySelector(".active");
    active.className = "";
    var next = active.nextElementSibling;
    if (next) {
        next.className = "active";
    } else {
        document.querySelector(".slide img").className = "active";
    }
}
setInterval(slide, 3000);