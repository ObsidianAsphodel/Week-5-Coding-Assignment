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

    addShapes(shapes)
    {
        if(shapes instanceof Shapes)
        {
            this.shapes.push[Shape];
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

    }
    
    deleteShapes()
    {

    }

    start()
    {
    let selection = this.showMenuOptions();
    while (selection != 0 )
    {
        switch(selection)
        {
            case '1':
            break;
            case '2':
            break;
            case '3':
            break;
            case '4':
            break;
            default:
            break;
        }
    }
    }
}