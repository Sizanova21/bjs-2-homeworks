"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let D, x1, x2;

	D = Math.pow(b, 2) - 4 * a * c; //дискриминант

	if (D < 0) {
		arr = [];
	} else if (D === 0) {
		x1 = -b / (2 * a);
		arr = [x1];
	} else {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr = [x1, x2];
	}

	return arr;
}

// процент, 1-й взнос, кредит , колличество месяцев  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPayment, finalPayment;
	let P = (1 / 12) * percent / 100;
	let S = amount - contribution;

	monthlyPayment = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));

	finalPayment = +(Math.round((countMonths * monthlyPayment) * 100) / 100).toFixed(2);

	return finalPayment;



}