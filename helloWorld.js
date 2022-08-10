// Comments in javascript

/*** INSTANTIATING VATIABLES ***/
// var (keeps it inside a function scope, but no restriced outside scope of [] or {})
// let (keeps scope anywhere inside and brackets, (To Enoc: just like Java)
// const (once instantiated, varaible cannot be changed)



/***************/
/*** OBJECTS ***/
/***************/
let anObject = {
	property1 = "aValue",
	property2 = "aNumValue",
	property3 = 7
};

let callDotObject = anObject.property1;
let callBracketObject = anObject['property2'];



/**************************/
/*** OBJECT CONSTRUCTOR ***/
/**************************/
function PrototypeObject(property1, property2, property3) {
	this.property1 = property1;
	this.property2 = property2;
	this.property3 = property3;
};



/**************/
/*** ARRAYS ***/
/**************/
let anArray = [ "thing1", "thing2", "thing3", "etc..." ];
anArray[3]; //etc...

anArray.pop();
// anArray = [ "thing1", "thing2", "thing3" ];

anArray.push('thing4');
// anArray = [ "thing1", "thing2", "thing3", "thing4" ];

// methods for queues and stacks
// .pop() .push("thingToAdd")
// .shift() .unshift("thingToAdd")

// apppend arrays
// array1.concat(array2)

// cut up array, return a range
// anArray.slice(0, -2) // return whole array except last two



/*****************/
/*** FUNCTIONS ***/
/*****************/
function nameOfFunction () {
	return something="returning value from function"
};



/***********************/
/*** BEYOND BOOLEANS ***/
/***********************/
// Falsy Values
// (false);
// (0);
// (");
// (null);
// (undefined);
// (NaN);



/*************/
/*** REGEX ***/
/*************/
// /pattern/modifiers;
// Modifiers:
// 	i (case insensitive)
// 	g (global)

// How to find matches? use .match(regex) method
// How to search for index? use .search(regex) method

let regEx = /ou/i;



/*******************/
/*** THIS & BIND ***/
/*******************/
// Sometimes this can lose context when you start to manipulate it outside the function is was called in, bind helps to recover and keep that connection
// let namedFunc = aFunc.bind(person1)();









