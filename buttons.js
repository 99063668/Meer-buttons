const color = ["green", "red", "blue"];

pagina();

function onbuttonclicked(nr){
    document.body.style.backgroundColor = color[nr-1];
}

function pagina() {
    document.body.style.backgroundColor = "grey";
    //style pagina

    createButtons(3);
}

function set_onclick(aantal){
    for (var a = 1;a < (aantal + 1);a++) {
      document.getElementById("button" + a).setAttribute("onclick", "onbuttonclicked(" + a + ")");
    }
}

function createButtons(aantal){
    for (var a = 1;a <(aantal + 1); a++) {
       var button = document.createElement("button"); 
       button.style.backgroundColor = color[a-1];
       button.id = "button" + a; 
       button.innerHTML = "button " + a; 
       container.appendChild(button);
    }
    set_onclick(aantal);
}
