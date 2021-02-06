

// Soal Nomor 3

let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ];


//CRUD display printAll
todos.forEach((i) => console.log(i.todo));

//CRUD display printByID
console.log(todos[0].todo);

//CRUD add
todos.push({id: 3, todo: "ngerjain tugas"});
todos;

//CRUD deletebyID
todos.splice(1,1);
console.log(todos);

//CRUD updateByID
todos[0].todo = "belajar CRUD";
todos[1].todo = "ngerjain TUGAS"
console.log(todos);



  



