class Shape
{
    //Class to create the object shape
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
        //Array that stores the shapes.
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
    //Used to create and store the new shapes into the shapeArray array.
    {
        console.log("Running");
     let name = prompt("Enter the name of the shape: ");
     let color = prompt("Enter the color of the shape: ");
     let sides = prompt("Enter how many sides the shape has: ");
     this.shapeArray.push(new Shape(name, color, sides));
        console.log(this.shapeArray, "Storing new shape");
    }
    describe()
    {
        return `${this.name} has ${this.shapes.length} inside of it`;
    }

    viewShapes()
    //Used to view the shapes in the array.
    {
            let shapeString = '';
            for(let i = 0; i < this.shapeArray.length; i++)
            {
                //pushes string to shapeString. Used console.log to test functionality. 
                shapeString += this.shapeArray[i].name + ' - ' + this.shapeArray[i].color + ' - ' + this.shapeArray[i].sides + '\n';
            }
            alert(shapeString);
    }
    //Used to delete the shapes in the array. 
    deleteShapes()
    {
        let index = prompt("Choose the index of the shape you wish to delete: ");
        //Check documentation for proper syntax. array.prototype.splice()
        this.shapeArray.splice(index, 1);
    }
}

let shapeBoxMenu = new shapeBox();
shapeBoxMenu.start();