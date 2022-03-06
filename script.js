let submit = document.getElementById("submit");
let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function showAkanName(event) {
    event.preventDefault()
    let date = document.getElementById("date").value;
    if (!date) {
        alert("Please input date")
        return
    };
    let gender = document.getElementById("gender");
    let optionValue = gender.options[gender.selectedIndex].value;
    if (optionValue == "none") {
        alert("Please select gender")
        return
    };
    let d = new Date(date);
    let day = d.getDay();
    if (optionValue == "male") {
    //Loop through male array
    for (let i = 0; i < male.length; i++) {
      if (parseInt(day) === i) {
        alert("Your Akan name is: " + male[i]);
      }
    }
    } else {
    //Loop through female array
    for (let i = 0; i < female.length; i++) {
    if (parseInt(day) === i) {
      alert("Your Akan name is: " + female[i]);
    }
    }
    }
}


submit.addEventListener('click', showAkanName);