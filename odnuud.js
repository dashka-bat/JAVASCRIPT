const n = 5;
let a = "";

for (let i = 0; i < n; i++) {
  for (let k = 0; k < n; k++) {
    a = a + " *";
  }
  a = a + "\n";
}
console.log(a);
a = "";
for (let b = 0; b < n; b++) {
  for (let k = 0; k < n; k++) {}
}
