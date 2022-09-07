// Alert

let bell = document.getElementById("bell");
const alertBannerOne = document.getElementById("alertOne");
const alertBannerTwo = document.getElementById("alertTwo");
const alertWrapper = document.getElementById("alertWrapper");
let dot = document.getElementById("dot");

bell.addEventListener('click', () =>{
  alertBannerOne.innerHTML = `<div class="alert-banner-one">
  <p><strong>Alert:</strong> You have unread messages</p>
  <p class="alert-banner-close-one">x</p>
  </div>
  `

  alertBannerTwo.innerHTML = `<div class="alert-banner-two">
  <p><strong>Alert:</strong> Privacy policy has changed</p>
  <p class="alert-banner-close-two">x</p>
  </div>
  `
  dot.style.display = "none";
});

alertWrapper.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close-one")) {
        alertBannerOne.style.display = "none";
    } else if (element.classList.contains("alert-banner-close-two")) {
        alertBannerTwo.style.display = "none";
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
  localStorage.setItem("profileToggle", profileToggle.checked);
  localStorage.setItem("timezone", timezone.selectedIndex)
 }); 

 let mailCheck = JSON.parse(localStorage.getItem('mailToggle'));
 document.getElementById('mailToggle').checked = mailCheck;

 let profileCheck = JSON.parse(localStorage.getItem('profileToggle'));
 document.getElementById('profileToggle').checked = profileCheck;

 let zoneCheck = JSON.parse(localStorage.getItem('timezone'));
 document.getElementById('timezone').selectedIndex = zoneCheck;

cancel.addEventListener('click', () => {
  localStorage.clear();
});


//Message Notifications
let send = document.getElementById('send');
let user = document.getElementById('userField');
let message = document.getElementById('messageField');

send.addEventListener('click', () => {
  if (user.value.length == 0 && message.value.length == 0) {
    alert("Please fill out both fields");
  } else if (user.value.length == 0 || message.value.length == 0) {
    alert("One of the fields is empty");
  } else {
    alert("Message sent successfully");
  }
});












