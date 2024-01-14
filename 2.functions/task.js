function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	let sumElements = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	let avg = +(sumElements / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	return arr.length !== 0 ? arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	) : 0;
}

function differenceMaxMinWorker(...arr) {
	return arr.length !== 0 ? Math.max(...arr) - Math.min(...arr) : 0;
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