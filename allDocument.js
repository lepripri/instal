var a = document.createElement("input"), b = document.createElement("input"), messageplusinfo = "";
a.className = "messageplusinfo";
b.className = "retirnedvaluemessage";
a.hidden = true;
b.hidden = true;
setInterval(() => {
    if (messageplusinfo != document.querySelector("input.messageplusinfo").value) {
        eval(document.querySelector("input.messageplusinfo").value);
        messageplusinfo = "";
        document.querySelector("input.messageplusinfo").value = "";
    }
}, 100);
document.body.appendChild(a);
