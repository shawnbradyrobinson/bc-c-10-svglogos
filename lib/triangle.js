const Shape = require("./shape");

class Triangle extends Shape {
    constructor(){
        super();
    }

    renderShape({textChoice, shapeColorChoice, textColorChoice}){
        const render = `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            
            <polygon points="50 15, 100 100, 0 100" fill="${shapeColorChoice}"/>


            <text x="52" y="95" font-size="35" text-anchor="middle" fill="${textColorChoice}">${textChoice}</text>
        
        </svg>
        
        
        `;
        return render; 
    }


}

module.exports = Triangle; 