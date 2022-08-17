function showInput() {
    var x = document.getElementById("input");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("output").innerHTML = text;
}