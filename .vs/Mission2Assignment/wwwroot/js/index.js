$("#submitBtn").click(function () {
	var asnPct = parseInt($("#assignments").val());
	var gpPct = parseInt($("#projects").val());
	var qzPct = parseInt($("#quizzes").val());
	var exPct = parseInt($("#exams").val());
	var inPct = parseInt($("#intex").val());
	var test = parseInt($("#assignments").val());
	var totalPct = (.55 * asnPct) + (.05 * gpPct) + (.1 * qzPct) + (.2 * exPct) + (.1 * inPct);
	var grade = "";
	if (totalPct >= 94) {
		grade = "A";
	}
	else if (totalPct >= 90) {
		grade = "A-";
	}
	else if (totalPct >= 87) {
		grade = "B+";
	}
	else if (totalPct >= 84) {
		grade = "B";
	}
	else if (totalPct >= 80) {
		grade = "B-";
	}
	else if (totalPct >= 77) {
		grade = "C+";
	}
	else if (totalPct >= 74) {
		grade = "C";
	}
	else if (totalPct >= 70) {
		grade = "C-";
	}
	else if (totalPct >= 67) {
		grade = "D+";
	}
	else if (totalPct >= 64) {
		grade = "D";
	}
	else if (totalPct >= 60) {
		grade = "D";
	}
	else {
		grade = "E";
    }
	alert("Your final percentage is " + totalPct + ". Your final grade will be a " + grade);
});