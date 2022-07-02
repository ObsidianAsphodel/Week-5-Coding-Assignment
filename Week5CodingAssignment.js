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
        this.shapes = [];
    }
    start()
    {
    let selection = this.showMenuOptions();
    while(selection != 0)
    {
        switch(selection)
        {
            case 1:
                this.addShapes();
                break;
            case 2:
                this.viewShapes();
                break;
            case 3:
                this.deleteShapes();
                break;
            default:
                selection = 0;
        }
        this.showMenuOptions();
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
    addShapes(shapes)
    {
        if(shapes instanceof Shapes)
        {
            let name = prompt("Enter the name of the shape: ");
            let color = prompt("Enter the color of the shape: ");
            let sides = prompt("Enter how many sides the shape has: ");
            this.shapes.push(new Shape(name, color, sides));
        }
        else
        {
            throw new Error("That's not a shape. Shapes must be instanced.");
        }
    }

    describe()
    {
        return `${this.name} has ${this.shapes.length} inside of it`;
    }

    viewShapes()
    {
        let index = prompt("Here are the shapes: ");
        if(index > -1 && index < this.shapes.length)
        {
            for(let i = 0; i < this.shapes.length; i++)
            {

            }
        }
    }
    
    deleteShapes()
    {
        let index = prompt("Choose the index of the shape you wish to delete: ");
        if(index > -1 && index < this.shapes.length)
        {
            this.shapes.length.splice(index, 1);
        }
    }
}

let shapeBoxMenu = new shapeBox();
shapeBoxMenu.start();