    //values in specific containers.
function getAkanName (){
    var year=document.getElementById("year").value;
    var month=document.getElementById("month").value;
    var day=document.getElementById("day").value;
    var gender=document.getElementById("gender").value;
    //strings to numbers.
    var yy=parseInt(year);
    var mm=parseInt(month);
    var dd=parseInt(day);
    //data
    var days=[
        "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ]
    var akanNames={
        female:["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
        male:[]
        ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]  
