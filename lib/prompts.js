const Shape = require("./shape");
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");
const inquirer = require("inquirer");
const fs = require("fs");


function getInfo(){
    inquirer
    .prompt([{
        type: "list",
        name: "shapeChoice",
        message: "Which shape would you like to use?",
        choices: ["Circle", "Square", "Triangle"],

    },
    {
        type: "input",
        name: "shapeColorChoice",
        message: "Please add a color for your shape",
    },
    {
        type: "input",
        name: "textChoice",
        message: "Please enter up to three characters for your logo",
    },
    {
        type: "input",
        name: "textColorChoice",
        message: "Please add a color for your text",
    },
    ]).then((data) => {

        fs.writeFile("example.svg", data, (err) => err ? console.log(err) : console.log("success!"));


    })

}

module.exports = {getInfo};

