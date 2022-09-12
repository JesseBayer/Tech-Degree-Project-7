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
  document.getElementById('mailToggle').checked = false;
  document.getElementById('profileToggle').checked = false;
  document.getElementById('timezone').selectedIndex = 0;
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


// Auto-complete
let userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

user.addEventListener("keyup", (e) => {
  removeNames();

  for (let i of userNames) {
    if (i.toLowerCase().startsWith(user.value.toLowerCase()) && user.value != "") {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.setAttribute("onclick", "displayNames('" + i + "')")
      listItem.innerHTML = i;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  user.value = value;
  removeNames();
}

function removeNames() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) =>{
    item.remove();
  })
}
