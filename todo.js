let todos = [
  {
    name: "huvtsas induudeh",
    status: "todo",
  },

  {
    name: "duugee harah",
    status: "todo",
  },
  {
    name: "emee uuh",
    status: "todo",
  },
  {
    name: "agsan tavih",
    status: "todo",
  },
];

console.log("ehnii todo", todos);
//todo add
function addTodo(addnewtodo) {
  todos.push(addnewtodo);
}

//todo delete one item
function deleteone(deleteoneitem) {
  let deleteoneitem = 0;
  while (deleteoneitem < 4) {
    console.log(todos);
  }
}

// //editname
// function editname(editname1) {
//   console.log("1111321312321321321321", todos);
// }
// //editstatus
// function editstatus() {}

// ///runnig
// addTodo({
//   name: "ahsdhasdhashdashd",
//   status: "askdhaskjdhasjkh",
// });
// editname({ name: "ahsdhasdhashdashd" });
// console.log(todos);
