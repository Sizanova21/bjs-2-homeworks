function getArrayParams(...arr) {
	let avg;
	let sumElements;
	min = Math.min(...arr);
	max = Math.max(...arr);

	sumElements = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	avg = +(sumElements / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sumElements = arr.length == 0 ? 0 : arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	return sumElements;
}

function differenceMaxMinWorker(...arr) {
	let difference = arr.length == 0 ? 0 : Math.max(...arr) - Math.min(...arr);
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return arr.length !== 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const arr = func(...arrOfArr[i]);
		if (arr > maxWorkerResult) {
			maxWorkerResult = arr;
		}
	}

	return maxWorkerResult;
}