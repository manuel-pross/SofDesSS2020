import { Ops } from "./Ops";

while (true) {

    let userCommand: String | null = prompt("Welcome to the Calculator. Start entering calculations!", "+");

    
    if (userCommand == null)
        userCommand = "";

    if (userCommand.toLowerCase() == "exit")
        break;

    let left: number = 0;
    let right: number = 0;
    let opInx: number = 0;
    
    if (userCommand.includes("+") || userCommand.includes("-") || userCommand.includes("/") || userCommand.includes("*") || userCommand.includes("^") || userCommand.includes("#"))
        for (let i: number = 0; i < userCommand.length; i++)
            if (userCommand[i] == "+" || userCommand[i] == "-"  || userCommand[i] == "/"  || userCommand[i] == "*" || userCommand[i] == "^" || userCommand[i] == "#")
                opInx = i;

    if (opInx < 0)
        console.log("No operator specified");
    
    let opSymbol: string = userCommand[opInx];

    try {
        left = parseInt(userCommand.substring(0, opInx));
        right = parseInt(userCommand.substring(opInx + 1));
    } catch (error) {
        console.log("Error parsing commmand");
    }

    console.log("Calculating " + left + " " + opSymbol + " " + right );

    switch (opSymbol) {
        case "+":
            console.log(Ops.add(left, right));    
            break;
        case "-":
            console.log(Ops.subtract(left, right));   
            break;
        case "*":
            console.log(Ops.mulitply(left, right));   
            break;
        case "^":
            console.log(Ops.power(left, right)); 
            break;
        case "#":
            console.log(Ops.greatestCommonDenominator(left, right));   
            break;
        default:
            console.log(Ops.divide(left, right));   
            break;
    }

}