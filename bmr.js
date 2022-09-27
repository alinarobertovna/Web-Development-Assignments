function metric() {
    var bmr;
    var calories = 0;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var gender = document.getElementById("gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");

    calories = activityLevel1.checked ? calories += 1.2 : calories += 0;
    calories = activityLevel2.checked ? calories += 1.375 : calories += 0;
    calories = activityLevel3.checked ? calories += 1.55 : calories += 0;
    calories = activityLevel4.checked ? calories += 1.725 : calories += 0;
    calories = activityLevel5.checked ? calories += 1.9 : calories += 0;

    bmr = (gender == "Female") ? (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) : (66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age));

    var kiloCalories = calories + bmr;

    document.write("<p>Your BMR is " + bmr + ".</p>");
    document.write("<p>Your daily calories intake is " + kiloCalories + ".</p>");
}
document.getElementById("submit1").addEventListener("click", metric);

function imperial() {
    var bmr;
    var calories = 0;
    var age = document.getElementById("age2").value;
    var height = document.getElementById("height2").value;
    var weight = document.getElementById("weight2").value;
    var gender = document.getElementById("gender2").value;

    var activityLevel1 = document.getElementById("activityLevel6");
    var activityLevel2 = document.getElementById("activityLevel7");
    var activityLevel3 = document.getElementById("activityLevel8");
    var activityLevel4 = document.getElementById("activityLevel9");
    var activityLevel5 = document.getElementById("activityLevel10");

    calories = activityLevel1.checked ? calories += 1.2 : calories += 0;
    calories = activityLevel2.checked ? calories += 1.375 : calories += 0;
    calories = activityLevel3.checked ? calories += 1.55 : calories += 0;
    calories = activityLevel4.checked ? calories += 1.725 : calories += 0;
    calories = activityLevel5.checked ? calories += 1.9 : calories += 0;

    bmr = (gender == "Female") ? (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)) : (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age));

    var kiloCalories = calories + bmr;

    document.write("<p>Your BMR is " + bmr + ".</p>");
    document.write("<p>Your daily calories intake is " + kiloCalories + ".</p>");
}
document.getElementById("submit2").addEventListener("click", imperial);