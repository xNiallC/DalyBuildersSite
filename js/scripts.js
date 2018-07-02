function toggleTopbar() {
    var x = document.getElementById("topbar");
    if (x.className === "topbar") {
        x.className += " responsive";
    } else {
        x.className = "topbar";
    }
}