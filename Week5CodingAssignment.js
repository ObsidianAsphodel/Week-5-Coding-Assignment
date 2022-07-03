class Shape
{
    constructor(name, color, sides)
    {
        this.name = name;
        this.color = color;
        this.sides = sides;
    }

    describe()
    {
        return `${this.name} is ${this.color} and has ${this.sides} sides`; 
    }
}
class shapeBox
{
    constructor()
    {
        this.shapeArray = [];
    }
    start()
    {
    let selection = this.showMenuOptions();
    while(selection != 0)
    {
        switch(selection)
        {
            case '1':
                this.createShapes();
                break;
            case '2':
                this.viewShapes();
                break;
            case '3':
                this.deleteShapes();
                break;
            default:
                selection = 0;
        }
        selection = this.showMenuOptions();
    }
        alert("No shapes.");
    }
    showMenuOptions() {
        return prompt(`
        0) Exit
        1) Add shapes
        2) View shapes
        3) Delete shapes
        `);
    }
    addShapes(shapeObject)
    {
        if(shapeObject instanceof Shape)
        {
            let selection = prompt("Enter 0 to return to Main Menu: ");
            this.shapeObject.push(new Shape(name, color, sides));
        }
        else
        {
            throw new Error("That's not a shape. Shapes must be instanced.");
        }
    }
    createShapes()
    {

     let name = prompt("Enter the name of the shape: ");
     let color = prompt("Enter the color of the shape: ");
     let sides = prompt("Enter how many sides the shape has: ");
     this.shapeArray.push(new Shape(name, color, sides));
    }
    describe()
    {
        return `${this.name} has ${this.shapes.length} inside of it`;
    }

    viewShapes()
    {
        let index = prompt("Here are the shapes: ");
        if(index > -1 && index < this.shapeArray.length)
        {
            for(let i = 0; i < this.shapeArray.length; i++)
            {
                this.shapeArray[i].name + ' - ' + this.shapeArray[i].color + ' - ' + this.shapeArray.sides + '\n';
            }
        }
    }
    
    deleteShapes()
    {
        let index = prompt("Choose the index of the shape you wish to delete: ");
        if(index > -1 && index < this.shapes.length)
        {
            this.shapeArray.length.splice(index, 1);
        }
    }
}

let shapeBoxMenu = new shapeBox();
shapeBoxMenu.start();