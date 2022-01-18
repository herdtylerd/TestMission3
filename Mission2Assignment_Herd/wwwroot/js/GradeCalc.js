$("#calcGrade").click(function () {
    // Assign form inputs to variables and multiply by grade weight
    var finalgrade = 0;
    var lettergrade = "";
    var assign = $("#assgn").val() * .55;
    var gp = $("#gp").val() * .05;
    var quiz = $("#quiz").val() * .1;
    var exam = $("#exam").val() * .2;
    var intex = $("#intex").val() * .1;

    // Add all weighted grades together to get final grade
    finalgrade = assign + gp + quiz + exam + intex;

    // If statement to determine final letter grade
    //hello
    if (finalgrade >= 94) {
        lettergrade = "A";
    } else if (finalgrade >= 90) {
        lettergrade = "A-";
    } else if (finalgrade >= 87) {
        lettergrade = "B+";
    } else if (finalgrade >= 84) {
        lettergrade = "B";
    } else if (finalgrade >= 80) {
        lettergrade = "B-";
    } else if (finalgrade >= 77) {
        lettergrade = "C+";
    } else if (finalgrade >= 74) {
        lettergrade = "C";
    } else if (finalgrade >= 70) {
        lettergrade = "C-";
    } else if (finalgrade >= 67) {
        lettergrade = "D+";
    } else if (finalgrade >= 64) {
        lettergrade = "D";
    } else if (finalgrade >= 60) {
        lettergrade = "D-"
    } else {
        lettergrade = "E";
    }

    // Print results
    var display = "Final Grade: " + finalgrade + "% - Letter Grade: " + lettergrade;
    //$("#displayGrade").text(display);
    alert(display);
})