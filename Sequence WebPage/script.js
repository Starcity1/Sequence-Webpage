function CheckDate() {
    // Variable takes note of the innerHTML (The content of the tag) of the element with the Id "date-button"
    let button_state = document.getElementById("date-button").innerHTML;

    //Boolean value, if the content of the button says "Click to see date, it will use the Date(), and create a span with a 2px dotted black border that will show the date, else it will hide it."
    if (button_state == "Click to see date") {
        document.getElementById("date").innerHTML = "Date: " + Date();
        document.getElementById("date-button").innerHTML = "Click to hide date";
        document.getElementById("date").style.border = "1px dotted black";
    } else {
        document.getElementById("date").innerHTML = "Date: ";
        document.getElementById("date-button").innerHTML = "Click to see date"
        document.getElementById("date").style.border = "2px hidden black";
    }

}

function Format_Result(result_list, iterations) {
    let formatted_result = "";
    if (result_list == "Segmentation fault") {
        return "Sorry, the program cannot handle that many iterations!"
    }
    for (let i = 0; i < iterations; i++) {
            if (i == iterations - 1) {
                formatted_result += result_list[i] + ".";
                break;
            }
            formatted_result += result_list[i] + "   ->    ";
        }
    return formatted_result
}

function CreateFibbonacci(itr) {
    if (itr > 1000) {
        return "Segmentation fault";
    }
    if (itr < 1) {
        return "n/a";
    } else if (itr < 2) {
        return [1];
    } else if (itr < 3) {
        return [1, 1];
    } 

    var result = CreateFibbonacci(itr - 1);
    result.push(result[itr - 2] + result[itr - 3]);
    return result
}

function CreateTriangularNumbers(iterations) {
    if (iterations > 2000) {
        return "Segmentation fault";
    }
    let result_List = [];
    for (let i = 0; i < iterations; i++) {
        result_List.push((i * (i + 1)) / 2);
    }
    console.log(result_List);
    return result_List
}

function CheckSequence() {
    let sequence = document.getElementById("SequenceSelect").value;
    let iterations = document.getElementById("AmtOfIterations").value;

    //document.getElementById("answer").innerHTML = "Sequence - " + sequence + "  ||  iterations - " + iterations;

    if (sequence == "default" || iterations == "") {
        document.getElementById("answer").innerHTML = "Please, select a sequence";
    } else if (sequence == "Fibbonacci" && iterations > 0){
        let Fibresult = CreateFibbonacci(iterations)
        let formatted_result = Format_Result(Fibresult, iterations);
        document.getElementById("answer").innerHTML = formatted_result;
    } else if (sequence == "Triangular-number") {
        let Triresult = CreateTriangularNumbers(iterations);
        document.getElementById("answer").innerHTML = "The button detects this function";
        let formatted_result = Format_Result(Triresult, iterations)
        document.getElementById("answer").innerHTML = formatted_result;
    }
}







// function CreateFibbonacci(itr) {
//     if (itr < 1) {
//         return "n/a";
//     } else if (itr < 2) {
//         return [1];
//     } else if (itr < 3) {
//         return [1, 1];
//     } 

//     var result = CreateFibbonacci(itr - 1);
//     result.push(result[itr - 2] + result[itr - 3]);
//     return result
// }
// let iterations = 10
// result = CreateFibbonacci(iterations)
// let formatted_result = "";
// for (let i = 0; i < iterations; i++) {
//     formatted_result += result[i] + " -> ";
// }
// console.log(formatted_result);