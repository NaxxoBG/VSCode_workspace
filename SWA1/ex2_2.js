// *Reverse an array
function reverseArrayInPlace(arr) {
	for (i in arr) {
      	arr.splice(i, 0, arr.pop())
    }
}
a = [1,2,3,4,5];
console.log(a);
reverseArrayInPlace(a);
console.log(a);
