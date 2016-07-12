/********************
OBJECT CREATION
*********************/

var notConfigurable = function(){

	var _internalObject = {};

	Object.defineProperty( _internalObject, "someKey", {
		    value: "for more control of the property's behavior",
		    writable: true,    
		    enumerable: true,  
		    configurable: false // cannot be deleted
 		}
	);

	return _internalObject;
};

var testObject = new notConfigurable();

delete testObject.someKey
// false

testObject.someKey
// "for more control of the property's behavior"

/*****************************************************************/

var notEnumerable = function(){

	var _internalObject = {};

	Object.defineProperty( _internalObject, "someKey", {
		    value: "You won't see this",
		    writable: true,    
		    enumerable: false,  // cannot be enumerated
		    configurable: true 
 		}
	);

	Object.defineProperty( _internalObject, "anotherKey", {
		    value: "You will see this",
		    writable: true,    
		    enumerable: true,  
		    configurable: true 
 		}
	);

	return _internalObject;
};

var testObject = new notEnumerable();

for(key in testObject){
	console.log(testObject[key]);
};

// "You will see this"

/*****************************************************************/

var notWritable = function(){

	var _internalObject = {};

	Object.defineProperty( _internalObject, "someKey", {
		    value: "You can't overwrite me",
		    writable: false,   // cannot be overwritten 
		    enumerable: true,  
		    configurable: true 
 		}
	);

	return _internalObject;
};

var testObject = new notWritable();

testObject.someKey = "this is a new text string";
// false 
testObject.someKey
// "You can't overwrite me"



