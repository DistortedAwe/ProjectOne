function outputTwoItems() {
    var x = document.getElementById("input");
    var text = "";
    var i;
    text = "&lt;h1&gt;" + x.elements[0].value + " " + x.elements[1].value + "&lt;/h1&gt;";
    document.getElementById("output").innerHTML = text;
}