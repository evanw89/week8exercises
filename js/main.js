//3
// creates variable which targets html element
var div = document.getElementById('add')
// creates variable which creates new text
var newText = document.createTextNode('insert text here')
// runs function appendChild on div target to append it with newText variable
div.appendChild(newText)


//4
var string = ['hello', 'my', 'name', 'is']
var newH1 = document.createElement('h1')
newH1.className = "newClass"
var newText2 = document.createTextNode(string)
newH1.appendChild(newText2)
div.appendChild(newH1)


//5
function clicked() {
	var userValue = document.getElementById('userInput').value
	console.log(userValue)
}


//6
var newString = [2, 59, 'seventeen', 33]
for(i=0; i<newString.length; i++) {
	console.log(newString[i])
}



//7
var newObject = {
	propertyOne:'One',
	propertyTwo:'Two',
	propertyThree:'Three'
}
console.log(newObject.propertyOne)
console.log(newObject.propertyTwo)
console.log(newObject.propertyThree)


//8
var objectOne = {
	propertyOne:'One',
	propertyTwo:'Two',
	propertyThree:'Three'
}
var objectTwo = {	
	propertyOne:'One',
	propertyTwo:'Two',
	propertyThree:'Three'
}
var objectThree = {	
	propertyOne:'One',
	propertyTwo:'Two',
	propertyThree:'Three'
} 


var newArray = [
	objectOne,
	objectTwo,
	objectThree
]
for(i=0; i<newArray.length; i++) {
	console.log(newArray[i].propertyOne, newArray[i].propertyTwo)
}
