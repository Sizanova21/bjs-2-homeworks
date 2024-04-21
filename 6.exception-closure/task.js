function parseCount(value) {
	result = Number.parseFloat(value);
	if (Number.isNaN(result)) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	} finally {

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
		return this._perimeter = this.a + this.b + this.c;
	}

	get area() {
		let p = this._perimeter * 0.5;
		let result = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
		return result = Math.round(result * 1000) / 1000;

	}

}


function getTriangle(a, b, c) {
	try {
		let triangle = new Triangle(a, b, c);
		return triangle;
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