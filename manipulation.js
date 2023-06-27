let timerInterval;

function calculateAge(){
    timerInterval = setInterval(() => {
        let dateOfBirth = new Date(document.getElementById('inputDate').value); 

        // console.log(dateOfBirth);

        // Below line will give the time in milliseconds since January 1970;
        let todayDate = new Date();

        // console.log(todayDate);

        let ageInMillisecs = todayDate.getTime() - dateOfBirth.getTime();

        // console.log(ageInMins);

        let ageInSecs = ageInMillisecs / 1000;  // to seconds
        let ageInMins = ageInSecs / 60;  // to minutes
        let ageInHours = ageInMins / 60; // to hours
        let ageInDays = ageInHours / 24;  // to days
        let ageInMonths = ageInDays / 30.4375  // to months
        let ageInYears = ageInMonths / 12  // to years

        document.getElementById('years').textContent = Math.floor(ageInYears);
        document.getElementById('months').textContent = Math.floor(ageInMonths % 12);
        document.getElementById('days').textContent = Math.floor(ageInDays % 30.4375);
        document.getElementById('hours').textContent = Math.floor(ageInHours % 24);
        document.getElementById('minutes').textContent = Math.floor(ageInMins % 60);
        document.getElementById('seconds').textContent = Math.floor(ageInSecs % 60);
    }, 1000);
}


function resetAllData(){
    document.getElementById('years').textContent = '';
    document.getElementById('months').textContent = '';
    document.getElementById('days').textContent = '';
    document.getElementById('hours').textContent = '';
    document.getElementById('minutes').textContent = '';
    document.getElementById('seconds').textContent = '';
    clearInterval(timerInterval);
    document.getElementById('inputDate').value = '';
}