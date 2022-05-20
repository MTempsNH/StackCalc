
/**
 * Coding Challenge - needs much refactoring
 * @param {*} str
 * @returns 
 */
export function StackCalc(str) {
    let result = 0;
    let parseArr = [];
    let instructArr = str.split(" ");
    let instructLen = instructArr.length;

    instructArr.every((element, index) => {
        if(!isNaN(element)){
            parseArr.push(element);
            return true;
        }else{
            if(element !== "DUP"){
                let num1 = parseArr.pop();
                let num2 = parseArr.pop();

                result = performInstruction(num1, num2, element)

                if(result === "error"){
                    result = "Invalid instruction: " + element;
                    return false;
                }
                if(index+1 < instructLen){
                    parseArr.push(result)
                }
                
            }else{
                let _tempNum = parseArr.pop();
                parseArr.push(_tempNum);
                parseArr.push(_tempNum);
            }
            return true;
        }
    });
    return result;
}

function performInstruction(num1, num2, item) {
    let result;
    let _n1 = parseInt(num1);
    let _n2 = parseInt(num2);

    switch (item){
        case "+":
            result = _n1 + _n2;
            break;
        case "-":
            result = _n1 - _n2;
            break;
        case "*":
            result = _n1 * _n2;
            break;
        case "/":
            result = _n1 / _n2;
            break;
        default:
            result = "error";
    }
    return result;
}