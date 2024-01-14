"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let discriminant, x1, x2;

	discriminant = Math.pow(b, 2) - 4 * a * c; //дискриминант

	 if (discriminant === 0) {
		x1 = -b / (2 * a);
		arr = [x1];
	} else if (discriminant > 0) {
		x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr = [x1, x2];
	}

	return arr;
}

// процент, 1-й взнос, кредит , колличество месяцев  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPayment, finalPayment;
	let partBet = (1 / 12) * percent / 100;
	let loanBody = amount - contribution;

	monthlyPayment = loanBody * (partBet + (partBet / ((Math.pow((1 + partBet), countMonths)) - 1)));

	finalPayment = +(Math.round((countMonths * monthlyPayment) * 100) / 100).toFixed(2);

	return finalPayment;



}