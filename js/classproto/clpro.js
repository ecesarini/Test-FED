export function analyzeProto() {
}


export class MyClass {
	constructor() {
		this.constructorProp = "Constructor property";
	}
	method() {
		console.log("Metodo normale");
	}
	methodArrow = () => {
		console.log("Metodo arrow");
	}
}

export function MyFunctionConstructor() {
	this.functionConstructorProperty = "Function constructor property";
	this.functionMethod = function() {};
	this.functionMethodArrow = () => {};
}