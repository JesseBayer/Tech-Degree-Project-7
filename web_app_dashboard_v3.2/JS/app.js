// Alert
const alertBanner = document.getElementById("alert");

let dot = document.getElementById("dot");

alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
        dot.style.display = "none"
    }
});



// Auto-complete
let userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];


function autocomplete(inp, arr) {

    let currentFocus;

    inp.addEventListener("input", function(e) {

        let resultsDiv, matchDiv, i, val = this.value;
        closeAllLists();

        if (!val) { 
            return false;
        }

        currentFocus = -1;
        resultsDiv = document.createElement("DIV");
        resultsDiv.setAttribute("id", this.id + "autocomplete-list");
        resultsDiv.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(resultsDiv);

        for (i = 0; i < arr.length; i++) {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            matchDiv = document.createElement("DIV");
            matchDiv.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            matchDiv.innerHTML += arr[i].substr(val.length);
            matchDiv.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            matchDiv.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            resultsDiv.appendChild(matchDiv);
          }
        }
    });

inp.addEventListener("keydown", function(e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      
      currentFocus++;
      addActive(x);

    } 
    else if (e.keyCode == 38) { //up

      currentFocus--;
      addActive(x);

    } 
    else if (e.keyCode == 13) {

      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
});
function addActive(x) {

  if (!x) return false;

  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);

  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {

  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}
function closeAllLists(elmnt) {

  let x = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
    x[i].parentNode.removeChild(x[i]);
  }
}
}

document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});
}



//Local Storage
let mailToggle = document.getElementById("mailToggle");
let profileToggle = document.getElementById("profileToggle");
let timezone = document.getElementById("timezone");

const save = document.getElementById("save");
const cancel = document.getElementById("cancel");


save.addEventListener('click', () => {
  localStorage.setItem("mailToggle", mailToggle.checked);

  function isChecked() {
    document.getElementById('mailToggle').checked = localStorage.getItem('mailToggle' === 'true');
  }

  let mailCheck = JSON.parse(localStorage.getItem('mailToggle'));

  if (mailCheck == 'true') {
    mailToggle.setAttribute('checked', 'checked');
  }

  window.onload = isChecked();
});

cancel.addEventListener('click', () => {
  localStorage.clear();
});

console.log(localStorage.getItem("mailToggle"));










