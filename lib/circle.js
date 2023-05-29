const Shape = require("./shape");

class Circle extends Shape {
    svgData = {
        testText: "This is from the circle class"
    };
    constructor(){
        super();
    }


}

module.exports = Circle; 