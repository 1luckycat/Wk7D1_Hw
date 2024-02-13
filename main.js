//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]


function doggie(str, arr) {
    for (const i in arr) {
        if (str.includes(arr[i])) {
            return "Matched dog_name";
        } else if (str.includes("Sassy")) {
            return "Thats a damn lucky cat";
        } else {   
            console.log("No Matches");
        }
    }
}

console.log(doggie(dogString, dogNames))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

arr1 = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function dragonBall(arr1) {
    evenIndexes = [0, 2, 4];
    for (let i = evenIndexes.length -1; i >= 0; i--)
        arr1.splice(evenIndexes[i], 1, "even index") 
        
    return arr1
}

console.log(dragonBall(arr1))

/** 
 * I COULDNT FIGURE THIS OUT COMPLETELY MYSELF.  I TRIED TO FIGURE OUT THE EVEN INDEXES
 * USING THE MODULO BUT IT WASNT WORKING. ALSO, WOULD I BE ABLE TO ADD EACH PERSON'S
 * SPECIAL MOVE WITHOUT USING MULTIPLE SPLICES?
 * 
 * 
 * */ 

// === HERE IS MY THOUGHT PROCESS AND WHAT I WAS TRYIING ===
// for (const i = 0; i < arr1.length; i++) {
//     if ((i % 2) == 0) {
//         arr1.splice(0, 1, "even index")
//         console.log(i)
        
//     }
// return arr1
// }
// }


// for (const i = 0; i < arr1.length; i++) {
//     if ((i % 2) == 0) {
//         arr1.splice(0, 1, "Kamehameha")
//         arr1.splice(2, 1, "Burning Attack")
//         arr1.splice(4, 1, "Masenko")
        
//     }
// return arr1
// }
// }





// ========== CODEWARS PROBLEMS #1 ========= //
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function reduceButGrow(arr) {
    let newNums = arr.reduce((accumulator, currentNum) => accumulator * currentNum)
    return newNums
}
console.log(reduceButGrow([1,2,3,4]))



// ========== CODEWARS PROBLEMS #2 ========= //
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function calculateBMI(weight, height) {
    let squared = height ** 2
    let calBmi = (weight) / (squared)

    if (calBmi <= 18.5) {
        return "Underweight"
    } else if (calBmi <= 25.0) {
        return "Normal"
    } else if (calBmi <= 30.0) {
        return "Overweight"
    } else if (calBmi > 30) {
        return "Obese"
    }
}

console.log(calculateBMI(80, 1.80))