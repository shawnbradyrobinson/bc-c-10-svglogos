const Shape = require("./shape");

class Square extends Shape {
    constructor(){
        super();
    }
    renderShape({textChoice, shapeColorChoice, textColorChoice}){
        const render = `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
       
            <rect x="10" y="10" width="200" height="200"  fill="${shapeColorChoice}" stroke-width="5"/>

            <text x="105" y="125" font-size="60" text-anchor="middle" fill="${textColorChoice}">${textChoice}</text>
        
        </svg>
        
        
        
        
        `;
        return render; 
    }
}

module.exports = Square; 