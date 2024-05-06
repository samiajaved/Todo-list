import inquirer from "inquirer"
 let todos = [];
 let condition = "true"

while(condition)
    {
 let todayTask = await inquirer.prompt(
    [
        {
            name: "todos",
            type: "input",
            message: "what do you want to add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]
 );

todos.push(todayTask.todos);
condition = todayTask.addMore
console.log(todos)

};