let submit = document.getElementById("submit");
male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],

function showAkanName(event) {
    event.preventDefault()
    let date = document.getElementById("date").value;
    if (date == "") return alert("Please input date");
    let d = new Date(date);

    let gender = document.getElementById("gender");
    let optionValue = gender.options[gender.selectedIndex].value;

    alert(optionValue)
}


submit.addEventListener('click', showAkanName);