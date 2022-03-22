const file = "data.json";
const workCurrent = document.getElementById("workC");
const workPrevious = document.getElementById("workP"); 
const playCurrent = document.getElementById("playC");
const playPrevious = document.getElementById("playP");
const studyCurrent = document.getElementById("studyC");
const studyPrevious = document.getElementById("studyP");
const exerciseCurrent = document.getElementById("exerciseC");
const exercisePrevious = document.getElementById("exerciseP");
const socialCurrent = document.getElementById("socialC");
const socialPrevious = document.getElementById("socialP");
const selfCareCurrent = document.getElementById("careC");
const selfCarePrevious = document.getElementById("careP");
const elmentOne = document.getElementById("one");
const elmentTwo = document.getElementById("two");
const elmentThree = document.getElementById("three");

fetch(file) 
.then(response =>  {
    return response.json();
})
.then(json => {
    displayData(json);
})
.catch(err => {
    console.log("Error: " + err);
});

function displayData(data) {

    
    elmentOne.addEventListener("click", function updateDaily() {
        workCurrent.innerHTML = data[0].timeframes.daily.current  + "hr";
        workPrevious.innerHTML = "Previous-" + data[0].timeframes.daily.previous + "hr";

        playCurrent.innerHTML = data[1].timeframes.daily.current + "hr";
        playPrevious.innerHTML = "Previous-" + data[1].timeframes.daily.previous + "hr";

        studyCurrent.innerHTML = data[2].timeframes.daily.current + "hr";
        studyPrevious.innerHTML = "Previous-" + data[2].timeframes.daily.previous + "hr";

        exerciseCurrent.innerHTML = data[3].timeframes.daily.current + "hr";
        exercisePrevious.innerHTML = "Previous-" + data[3].timeframes.daily.previous + "hr";

        socialCurrent.innerHTML = data[4].timeframes.daily.current + "hr";
        socialPrevious.innerHTML = "Previous-" + data[4].timeframes.daily.previous + "hr";

        selfCareCurrent.innerHTML = data[5].timeframes.daily.current + "hr";
        selfCarePrevious.innerHTML = "Previous-" + data[5].timeframes.daily.previous + "hr";
 
    });

    elmentTwo.addEventListener("click", function updateWeekly() {
        workCurrent.innerHTML = data[0].timeframes.weekly.current  + "hr";
        workPrevious.innerHTML = "Previous- " + data[0].timeframes.weekly.previous + "hr";

        playCurrent.innerHTML = data[1].timeframes.weekly.current + "hr";
        playPrevious.innerHTML = "Previous-" + data[1].timeframes.weekly.previous + "hr";

        studyCurrent.innerHTML = data[2].timeframes.weekly.current + "hr";
        studyPrevious.innerHTML = "Previous-" + data[2].timeframes.weekly.previous + "hr";
        
        exerciseCurrent.innerHTML = data[3].timeframes.weekly.current + "hr";
        exercisePrevious.innerHTML = "Previous-" + data[3].timeframes.weekly.previous + "hr";

        socialCurrent.innerHTML = data[4].timeframes.weekly.current + "hr";
        socialPrevious.innerHTML = "Previous-" + data[4].timeframes.weekly.previous + "hr";

        selfCareCurrent.innerHTML = data[5].timeframes.weekly.current + "hr";
        selfCarePrevious.innerHTML = "Previous-" + data[5].timeframes.weekly.previous + "hr";

        
    });

    elmentThree.addEventListener("click", function updateMonthly() {
        workCurrent.innerHTML = data[0].timeframes.monthly.current  + "hr";
        workPrevious.innerHTML = "Previous- " + data[0].timeframes.monthly.previous + "hr";

        playCurrent.innerHTML = data[1].timeframes.monthly.current + "hr";
        playPrevious.innerHTML = "Previous-" + data[1].timeframes.monthly.previous + "hr";

        studyCurrent.innerHTML = data[2].timeframes.monthly.current + "hr";
        studyPrevious.innerHTML = "Previous-" + data[2].timeframes.monthly.previous + "hr";

        exerciseCurrent.innerHTML = data[3].timeframes.monthly.current + "hr";
        exercisePrevious.innerHTML = "Previous-" + data[3].timeframes.monthly.previous + "hr";

        socialCurrent.innerHTML = data[4].timeframes.monthly.current + "hr";
        socialPrevious.innerHTML = "Previous-" + data[4].timeframes.monthly.previous + "hr";

        selfCareCurrent.innerHTML = data[5].timeframes.monthly.current + "hr";
        selfCarePrevious.innerHTML = "Previous-" + data[5].timeframes.monthly.previous + "hr";

         
    });

}

function toggle(element) {
    for(let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function(e) {
            let x = this;
            for (let j = 0; j < element.length; j++) {
                if(x != element[j]) {
                    element[j].classList.remove("active");
                
                } else if(x.classList.contains("active") === true) {
                    x.classList.remove("active");
                } else {
                    x.classList.add("active");
                }
            }
            e.preventDefault();
        });
    }
}
toggle(document.querySelectorAll("a"));
