#! /user/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "human",
        type: "number",
        message: "please guess a num btw 1 to 7:",
    },
]);
if (answers.human == randomNumber) {
    console.log("congtretulation! you win.");
}
else {
    console.log("better luck next time.");
}
