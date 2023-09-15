#! /usr/bin/env node
import inquirer from "inquirer";
let task_list = [];
console.log("Welcome to the TODO list application!\n")
while (true) {
    const question = await inquirer.prompt([{
        type: "list",
        message: "Select a functionality",
        name: "operation",
        choices: [
            "Add a task",
            "Delete a task",
            "Mark a task as complete",
            "Display task list",
            "Exit"
        ]
    }]);
    if (question.operation === "Add a task") {
        const addtask = await inquirer.prompt([{
            type: "input",
            message: "Enter the task that you want to add:",
            name: "task",
        }]);
        let x: String = addtask.task 
        task_list.push(x)
        console.log(x + " has been added successfully")
    }

    else if (question.operation === "Delete a task") {
        const deltask = await inquirer.prompt([{
            type: "input",
            message: "Enter the task that you want to delete:",
            name: "task",
        }]);
        let y: String = deltask.task
        let z = task_list.includes(y)
        if (z) {
            let index: number = task_list.indexOf(y)
            task_list.splice(index, 1)
            console.log(y + " has been removed successfully")
        }
        else { console.log("Unable to find the task " + y) }
    }

    else if (question.operation === "Display task list") {
        for (let i = 0; i < task_list.length; i++) {
            console.log(i + 1+ ". ", task_list[i])
            if(task_list.length == 0){
                console.log("Task list is empty")
            }
        }


    }
    else if (question.operation === "Exit") {
        console.log("Program exited successfully")
        break
    }
    else {
        const completetask = await inquirer.prompt([{
            type: "input",
            message: "Enter the task that you have completed: ",
            name: "task",
        }]);
        let y: String = completetask.task
        let z = task_list.includes(y)
        var index: number = task_list.indexOf(y)
        if (z) {
            task_list[index] +=  '  ✅'
            console.log(y + " has been checkmarked successfully\n select Display task list to see changes")
        }
        else{
           console.log( "Unable to find the task " + y) } 
    }
}