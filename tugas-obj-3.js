

// Soal Nomor 3

let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
];


//CRUD display printAll

let printAll = () => {

todos.forEach((i) => console.log(i.todo));

};

printAll();



//CRUD display printByID

let printByID = () => {

console.log(todos[0].todo);

};

printByID();



//CRUD add

let add = () => {

todos.push({id: 3, todo: "ngerjain tugas"});
todos;

};

add();


//CRUD deletebyID

let deleteByID = () => {

todos.splice(1,1);
console.log(todos);

};

deleteByID();


//CRUD updateByID

let updateByID = () => {

todos[0].todo = "belajar CRUD";
todos[1].todo = "ngerjain TUGAS"
console.log(todos);

};

updateByID();
