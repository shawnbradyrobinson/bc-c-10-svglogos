const Shape = require("./shape");
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");
const inquirer = require("inquirer");
const fs = require("fs");


function getInfo(){
    inquirer
    .prompt([
    {
        type: "input",
        name: "fileName",
        message: "What would you like your .svg file to be named?"
    },    
    {
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
       if (data.textChoice.length > 3){
         console.log("Please enter fewer characters and try again!");
         return; 
       }
       
        if(data.shapeChoice === "Circle"){
            console.log("CHOICE IS CIRCLE");
            const svgCircle = new Circle();
            const renderedCircle = svgCircle.renderShape(data);
            fs.writeFile(`./examples/${data.fileName}.svg`, renderedCircle, (err) => err ? console.log(err) : console.log("success!"));
        }

        if(data.shapeChoice === "Triangle"){
            console.log("CHOICE IS TRIANGLE");
            const svgTriangle = new Triangle();
            const renderedTriangle = svgTriangle.renderShape(data);
            fs.writeFile(`./examples/${data.fileName}.svg`, renderedTriangle, (err) => err ? console.log(err) : console.log("success!"));
        }

        if(data.shapeChoice === "Square"){
            console.log("CHOICE IS SQUARE");
            const svgSquare = new Square();
            const renderedSquare = svgSquare.renderShape(data);
            fs.writeFile(`./examples/${data.fileName}.svg`, renderedSquare, (err) => err ? console.log(err) : console.log("success!"));
        }

    })

}

module.exports = {getInfo};

