let array1 = [1, 2, 3, 4];
console.log(array1);

function multi(a) {
  return a * a;
}
const newarray = array1.map(multi);
console.log("kkkkkkkkkkk", newarray);

let array2 = ["80805050", "9911911", "9999919"];
console.log("----->", array2);

function firstfour(a, b) {
  let numberarray = a.split("");
  let num = "";
  for (let i = 0; i < 4; i++) {
    num = num + numberarray[i];
  }
  return num;
}
const firstfour1 = array2.map(firstfour);
console.log(firstfour1);
