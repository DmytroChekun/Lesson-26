let carCard = {
    brand: "Mazda",
    model: "RX-7",
    year: "2002",
    "average speed": 125
}

let averageSpeedCalculator = function(){
    let travelDistance = prompt('Введи відстань яку потрібно подолати, для розрахунку часу на подорож. (в кілометрах)');
    let avSpCalc = carCard["average speed"];
    let resultInHours = travelDistance/avSpCalc;
    let resultWithBreak = resultInHours;
    if (resultInHours >= 4){
        let chillTime = Math.floor(resultInHours/4);
        resultWithBreak += chillTime;
    }
    alert(`Відстань в ${travelDistance}км  ви подолаєте за ${resultWithBreak} годин/години. \(Враховуючи що кожних 4 години дороги ви робите перерву 1 годину).`);
}

let carInfoDisplay = function(){
    let carInfo = prompt(` Марка: ${carCard.brand} \n Модель: ${carCard.model} \n Рік випуску: ${carCard.year} \n Середня швидкість: ${carCard["average speed"]} \n
    Для того щоб розрахувати час подорожі - введіть 1.`);
    if (carInfo == 1){
        averageSpeedCalculator();
    }
}
carInfoDisplay();



let time = {
    hours: 1,
    minutes: 00,
    seconds: 00,
    displayTime: function(){
            var hours = this.hours;
            var minutes = this.minutes;
            var seconds = this.seconds;
            

            if (seconds == 0 ) {
                seconds = "00";
            }
            else if ( seconds >= 60 ) {
                while ( seconds >= 60 ) {
                    seconds -= 60;
                    minutes += 1;
                }
                while ( seconds >= 3600 ) {
                    seconds -= 3600;
                    hours += 1;
                }
            }else if ( seconds < 10 ) {
                seconds = "0" + seconds;
            }

            if ( minutes == 0 ) {
                minutes = "00";
            }else if ( minutes >= 60 ) {
                while ( minutes >= 60 ) {
                minutes -= 60;
                hours += 1;
                }
            }else if ( minutes < 10 ) {
                minutes = "0" + minutes;
            }
    
            if ( hours == 0 ) {
                hours = "00";
            }else if ( hours < 10 ) {
                hours = "0" + hours;
            }
            alert(`${hours}:${minutes}:${seconds}`);
    },

    secondsAddition: function(){
        let addSeconds = prompt("Введи кількість секунд яку потрібно додати до часу");
        this.seconds += parseInt(addSeconds);

    },
    minutesAddition: function(){
        let addMinutes = prompt("Введи кількість хвилин яку потрібно додати до часу");
        this.minutes += parseInt(addMinutes);
    },
    hoursAddition: function(){
        let addHours = prompt("Введи кількість годин яку потрібно додати до часу");
        this.hours += parseInt(addHours);
    }
}

time.displayTime();
time.secondsAddition();
time.minutesAddition();
time.hoursAddition();
time.displayTime();