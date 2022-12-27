//https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/#:~:text=Use%20the%20element%20with%20the%20type%20radio%20to%20create,its%20checked%20property%20is%20true%20.
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// generate the radio groups
const group = document.querySelector("#group");
group.innerHTML = sizes.map((size) => `<div>
        <input type="radio" name="size" value="${size}" id="${size}">
        <label for="${size}">${size}</label>
    </div>`).join(' ');
    console.log(group.innerHTML)

// add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="size"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
};

function showSelected(e) {
    console.log(e);
    if (this.checked) {
        document.querySelector('#output').innerText = `You selected ${this.value}`;
    }
}

function runRadioList() {
    const radioListBtn = document.querySelector('#radioListBtn');
    const radioList = document.querySelectorAll('input[name="radioList"]');
        let selectedRadio;
        for (const radioButton of radioList) {
            if (radioButton.checked) {
                selectedRadio = radioButton.value;
                break;
            }
        }
        // show the output:
        radioListOutput.innerText = selectedRadio ? `You selected ${selectedRadio}` : `You haven't selected any size`;
    }

function outputOneItem() {
    var oneInput = document.getElementById("oneInput");
    document.getElementById("oneInputOutput").innerHTML = oneInput.value;
}

function outputTwoItems() {
    var x = document.getElementById("input");
    var text = "";
    var i;
    text = "&lt;h1&gt;" + x.elements[0].value + " " + x.elements[1].value + "&lt;/h1&gt;";
    document.getElementById("outputTwoItems").innerHTML = text;
}

// function printRandomHTML() {
//     return (
//         <p class="something">
//             this is a cool feature
//         </p>
//     )
// }