var addon = require('./build/Release/addon');

var obj = new addon.MyObject(10);
console.log( obj.plusOne() ); // 11
console.log( obj.plusOne() ); // 12
console.log( obj.plusOne() ); // 13

var newObj = obj.makeNewMyObject();
console.log(newObj.plusOne());
console.log(newObj.plusOne());
console.log(newObj.plusOne());
