function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg, sumElements;
	max = Math.max(...arr);
	min = Math.min(...arr);

	sumElements = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	avg = +(Math.round((sumElements / arr.length) * 100) / 100).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sumElements;
	if (arr.length == 0) {
		sumElements = 0;
	} else {
		sumElements = arr.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0,
		);

	}
	return sumElements;
}

function differenceMaxMinWorker(...arr) {
	let difference;

	if (arr.length == 0) {
		difference = 0;
	} else {
		let min = Infinity;
		let max = -Infinity;

		max = Math.max(...arr);
		min = Math.min(...arr);
		difference = max - min;
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let difference;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length == 0) {
		difference = 0;
	} else {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}


		}
		difference = sumEvenElement - sumOddElement;
	}
	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg;
	if (arr.length == 0) {
		avg = 0;
	} else {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		avg = sumEvenElement / countEvenElement;
	}
	return avg;
}

function makeWork (arrOfArr, func) {
	


}
