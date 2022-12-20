let birthdayCNo = document.getElementById("birthdayCNo");
let birthmonthCNo = document.getElementById("birthmonthCNo");
function findBirthday(){
    let ans = document.getElementById("ans");
    let birthdayCNoValue = birthdayCNo.value;
    let birthmonthCNoValue = birthmonthCNo.value;
    // console.log(birthdayCNoValue);
    if(birthdayCNoValue == "" || birthmonthCNoValue == ""){
        alert("Please enter both values");
        return;
    }
    let dayPowers = birthdayCNoValue.split(" ");
    let birthday = 0;
    for (let i = 0; i < dayPowers.length; i++) {
        birthday += Math.pow(2, dayPowers[i].trim());
    }
    let monthPowers = birthmonthCNoValue.split(" ");
    let birthMonth = 0;
    for (let i = 0; i < monthPowers.length; i++) {
        birthMonth += Math.pow(2, monthPowers[i].trim());
    }
    switch(birthMonth){
        case 1:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} January`;
                // console.log(`Your birthday is on ${birthday} January`);
                break;
            } else {
                // console.log("Invalid date");
                ans.innerHTML = "Invalid date";
                break;
            }
        case 2:
            if (birthday > 0 && birthday < 29) {
                ans.innerHTML = `Your birthday is on ${birthday} February`;
                // console.log(`Your birthday is on ${birthday} February`);
                break;
            } else if (birthday == 29){
                ans.innerHTML = `Your birthday is on ${birthday} February (Leap Year)`;
                // console.log(`Your birthday is on ${birthday} February (Leap Year)`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 3:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} March`;
                // console.log(`Your birthday is on ${birthday} March`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 4:
            if (birthday > 0 && birthday < 31) {
                ans.innerHTML = `Your birthday is on ${birthday} April`;
                // console.log(`Your birthday is on ${birthday} April`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 5:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} May`;
                // console.log(`Your birthday is on ${birthday} May`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 6:
            if (birthday > 0 && birthday < 31) {
                ans.innerHTML = `Your birthday is on ${birthday} June`;
                // console.log(`Your birthday is on ${birthday} June`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 7:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} July`;
                // console.log(`Your birthday is on ${birthday} July`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 8:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} August`;
                // console.log(`Your birthday is on ${birthday} August`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 9:
            if (birthday > 0 && birthday < 31) {
                ans.innerHTML = `Your birthday is on ${birthday} September`;
                // console.log(`Your birthday is on ${birthday} September`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 10:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} October`;
                // console.log(`Your birthday is on ${birthday} October`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;  
            }
        case 11:
            if (birthday > 0 && birthday < 31) {
                ans.innerHTML = `Your birthday is on ${birthday} November`;
                // console.log(`Your birthday is on ${birthday} November`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        case 12:
            if (birthday > 0 && birthday < 32) {
                ans.innerHTML = `Your birthday is on ${birthday} December`;
                // console.log(`Your birthday is on ${birthday} December`);
                break;
            } else {
                ans.innerHTML = "Invalid date";
                // console.log("Invalid date");
                break;
            }
        default:
            ans.innerHTML = "Invalid month";
            // console.log("Invalid month");
            break;
    }
}
// findBirthday();
function resetValues(){
    birthdayCNo.value = "";
    birthmonthCNo.value = "";
    ans.innerHTML = "";
}