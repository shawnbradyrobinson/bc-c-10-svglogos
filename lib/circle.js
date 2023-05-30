const Shape = require("./shape");

class Circle extends Shape {
    constructor(){
        super();
    }

    renderShape({textChoice, shapeColorChoice, textColorChoice,}){
        const render = `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="105" cy="110" r="94"  fill="${shapeColorChoice}"/>

            <text x="105" y="125" font-size="60" text-anchor="middle" fill="${textColorChoice}">${textChoice}</text>
        
        </svg>
        `;
        return render; 

    }

}

module.exports = Circle; 