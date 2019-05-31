// 1

// let mySum = 0;

// async function calculateSum(a, b) {
//     mySum = a + b;
//     return mySum;
// }


// let sum = calculateSum(2, 6)
//     .then((result => {
//         console.log(result);
//     }))

// 2

// async function showResults() {
//     let results = await fetch('https://api.github.com')
//     return results;
// }

// showResults()
// .then(response => response.json())
// .then(data => console.log(data))

// 3

let mySum = 0;

async function calculateSum(a, b) {
    mySum = a + b;
    return mySum;
}


let sum = calculateSum(2, 6)
.then((result => {
    if (result > 8) {
        console.log('larger than 8');
    }
    else {
        console.log(result);
    }
}))

// 4

async function writeDataToFile() {
    let data = await fetch('https://api.myjson.com/bins/17vz8v')
    return data;
}

writeDataToFile()
.then(response => response.json())
.then(odata => data = odata.map(function (x) { return x * 8; }))
.then(data => console.log( data))