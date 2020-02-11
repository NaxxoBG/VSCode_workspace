var a = [1, 2, 3, 5, 8];
console.log(a.length);

console.log(a[5]);

a.forEach(e => console.log(e))

console.log("Total sum before adding element " + a.reduce((f, s)=>(f += s)));
a[8] = 55;
console.log("Total sum after adding element " + a.reduce((f, s)=>(f += s)));
console.log(a.length);
console.log(a)