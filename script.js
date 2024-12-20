function setup(){
    let buttons = document.getElementById("buttons");
    let ok = document.createElement("button");
    ok.innerHTML= "ok";
    ok.addEventListener("click", checkPassword);
    buttons.appendChild(ok);
    let cancel = document.createElement("button");
    cancel.innerHTML= "cancel";
    buttons.appendChild(cancel);
}

//If the user "Lawnmower Man" enters "7.3942" as the password and 
//clicks "OK", delete the entire div class box and show http://i.imgur.com/IUVDNyp.jpg.
function checkPassword(){
    let body = document.getElementsByTagName("body")[0];
    let dialogs = document.getElementById("dialogs");
    let userName = dialogs.querySelector(':nth-child(2)').value;
    let password = dialogs.querySelector(':nth-child(4)').value;
    let crUser = "Lawnmower Man";
    let crPW = "7.3942";
    if (userName==crUser && password== crPW) {
    let box = document.getElementsByClassName("box");
    box[0].remove();
    body.style.backgroundImage = "url('http://i.imgur.com/IUVDNyp.jpg')";
    }
    else {
        dialogs.querySelector(':nth-child(2)').value="";
        dialogs.querySelector(':nth-child(4)').value = "";
        body.style.backgroundColor = "red";
    }
}