//object spread operators and method
let x;
const todo =[
    {
        todo_id :1,
        todo_name : 'hello',
        todo_completed :false,
    },
     {
        todo_id :2,
        todo_name : 'hell',
        todo_completed :true,
    },
    {
        todo_id :3,
        todo_name : 'ello',
        todo_completed :true,
    }
]

x= todo;
x=todo.id[0];
x=todo.todo_completed[2];
console.log(x);
