var tdlist = document.getElementsByTagName("LI");
var i;
// append edit and close
for (i = 0; i < tdlist.length; i++) {
    var itag1 = document.createElement("I");
    var itag2 = document.createElement("I");
    itag1.className = "far fa-edit edit";
    itag2.className = "fas fa-times close";
    tdlist[i].appendChild(itag1);
    tdlist[i].appendChild(itag2);
  }


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

var edit = document.getElementsByClassName("edit");
var btn = document.querySelector('.addBtn');
for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        btn.innerText = "Update";
        var inpval = document.getElementById("Input")
        var pe = this.parentElement;
        var val = pe.innerText;
        inpval.value = val;
        console.log(edit)

        btn.onclick = function() {
            pe.innerText = inpval.value;
            inpval.value = "";
            btn.innerText = "Add";
            var itag1 = document.createElement("I");
            var itag2 = document.createElement("I");
            itag1.className = "far fa-edit edit";
            itag2.className = "fas fa-times close";
            pe.appendChild(itag1);
            pe.appendChild(itag2);
            var j;
            for (j = 0; j < close.length; j++) {
                close[j].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }

        
  }
}

// delete todo
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var td = this.parentElement;
  td.style.display = "none";
  }
}
// Add todo
function newElement() {
    var li = document.createElement("li");
    var inpval = document.getElementById("Input").value;
    var text = document.createTextNode(inpval);
    li.appendChild(text);

    if (inpval === '') {
        alert("You must write something!");
    } else {
      document.getElementById("tdlist").appendChild(li);
    }

    document.getElementById("Input").value = "";
    var itag1 = document.createElement("I");
    var itag2 = document.createElement("I");
    itag1.className = "far fa-edit edit";
    itag2.className = "fas fa-times close";
    li.appendChild(itag1);
    li.appendChild(itag2);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }
    }
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function() {
            btn.innerText = "Update";
            var inpval = document.getElementById("Input")
            var pe = this.parentElement;
            var val = pe.innerText;
            inpval.value = val;
            console.log(edit)
    
            btn.onclick = function() {
                pe.innerText = inpval.value;
                inpval.value = "";
                btn.innerText = "Add";
                var itag1 = document.createElement("I");
                var itag2 = document.createElement("I");
                itag1.className = "far fa-edit edit";
                itag2.className = "fas fa-times close";
                pe.appendChild(itag1);
                pe.appendChild(itag2);
                var j;
                for (j = 0; j < close.length; j++) {
                    close[j].onclick = function() {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }
                }
            }
        }
    }
  }

//Clearing the list
function removeAll(){
    var lst = document.getElementsByTagName("ul");
      lst[0].innerHTML = "";
  }


