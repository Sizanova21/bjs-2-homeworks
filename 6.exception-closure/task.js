let value;

function parseCount(value) {
	if (Number.isNaN(Number.parseFloat(value))) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return Number.parseFloat(value);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || a + c < b || c + b < a) {
			const error = new Error("Треугольник с такими сторонами не существует");
			throw error;
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = this.perimeter * 0.5;
		let result = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
		return parseFloat(result.toFixed(3));

	}

}


function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		let triangleError = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
		return triangleError;

	}



}

let test = new Triangle(1, 2, 3);
console.log(test);