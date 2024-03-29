#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.magentaBright.bgYellow.bold("\n\t\t Welcome To SUK ATM \n"));
console.log(chalk.blueBright("My Pin Password is : 446688\n"));
let currentBalance = 25000;
let mypin = 446688;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright("enter your pin :"),
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log(chalk.blueBright("  correct pin code\n"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellowBright("select option \n"),
            type: "list",
            choices: ["check balance", "withdraw"]
        }
    ]);
    if (operationAnswer.operation === "check balance") {
        console.log(chalk.blueBright("\nyour balance is :"), currentBalance);
    }
    else if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellowBright("select amount"),
                type: "list",
                choices: [5000, 10000, 15000, 20000, 25000, 30000]
            }
        ]);
        if (amountAnswer.amount === 30000) {
            console.log(currentBalance > amountAnswer.amount, chalk.redBright("\nyou dont have money in your account"));
        }
        else if (amountAnswer.amount === 5000) {
            console.log(chalk.blueBright("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
        else if (amountAnswer.amount === 10000) {
            console.log(chalk.blueBright("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
        else if (amountAnswer.amount === 15000) {
            console.log(chalk.blueBright("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
        else if (amountAnswer.amount === 20000) {
            console.log(chalk.blueBright("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
        else if (amountAnswer.amount === 25000) {
            console.log(chalk.blueBright("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
        else if (amountAnswer.amount === 30000) {
            console.log(chalk.blue("your remaining balance is :"), currentBalance -= amountAnswer.amount);
        }
    }
}
else {
    console.log(chalk.redBright(" Incorrect pin code"));
}
