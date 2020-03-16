function check() {
    var question1 = document.quiz.question1.value
    var question2 = document.quiz.question2.value
    var question3 = document.quiz.question3.value
    var question4 = document.quiz.question4.value
    var question5 = document.quiz.question5.value
    var correct = 0;


    if (question1 == "Ottawa") {
        correct++;
    }

    if (question2 == "Anxious") {
        correct++;
    }

    if (question3 == "Bill Gate") {
        correct++;
    }

    if (question4 == "HarmonyOs") {
        correct++;
    }

    if (question5 == "Charles Babbage") {
        correct++;
    }


    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var pictures = ["win.gif", "better1.gif", "sorry.gif"];

    var range;

    if (correct < 1) {
        range = 4;
    }

    if (correct < 4) {
        range = 1;
    }

    if (correct < 3) {
        range = 2;
    }

    if (correct < 2) {
        range = 3;
    }

    if (correct < 5) {
        range = 2;
    }


    if (correct > 0 && correct < 5) {
        range = 1;
    }

    if (correct > 4) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";



    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + "correct";
    document.getElementById("picture").src = pictures[range];
}