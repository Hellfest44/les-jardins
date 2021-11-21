$().ready(() => {
    $("h1").css("color", "forestgreen");
});

function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var connect = document.getElementById("connect");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        connect.style.overflowY = "hidden";
    } else {
        menu.className = "";
        icon.className ="";
        connect.style.overflowY ="";
    }
}

// Dates..................
function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() 
{
  while(true) 
  {
    await pause(1000);
    var cejour = new Date();
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2);//+ ":" + ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('date').innerHTML = dateheure;
  }
}
afficherDate();


// XMLHttpRequest.........

function reqListener() {
    console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
req.open("get", "data.txt", true);
req.send();

// FETCH......................

