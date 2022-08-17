function outputOneItem() {
    var oneInput = document.getElementById("oneInput");
    var oneInputOutput = "";
    oneInputOutput =  oneInput.value;
    document.getElementById("oneInputOutput").innerHTML = oneInputOutput;


}

function outputTwoItems() {
    var x = document.getElementById("input");
    var text = "";
    var i;
    text = "&lt;h1&gt;" + x.elements[0].value + " " + x.elements[1].value + "&lt;/h1&gt;";
    document.getElementById("outputTwoItems").innerHTML = text;
}