console.log("Welcome Shera Bhai 🤴🏻")
    var input = document.getElementById("data");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add").click();
    }
    });

    var closebtn = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < closebtn.length; i++) {
        var btn = document.getElementById("cross");
        var txt = document.createTextNode("\u00D7");
        btn.className = "close";
        btn.appendChild(txt);
        closebtn[i].appendChild(btn);
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
        }
    }, false);

    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("data").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
        alert("Invalid Data!");
        } else {
        document.getElementById("task").appendChild(li);
        }
        document.getElementById("data").value = "";

        var btn2 = document.createElement("BUTTON");
        var txt2 = document.createTextNode("\u00D7");
        btn2.className = "close";
        btn2.appendChild(txt2);
        li.appendChild(btn2);

        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        }
    }