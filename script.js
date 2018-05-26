
var testElements = document.getElementsByClassName('style');

var testArray = Array.prototype.filter.call(testElements, function(testElement){
	return testElement.nodeName === 'LI';
});

console.log(testArray.innerText);