const personName = "Grimmjow";
console.log(`Hello ${personName}, welcome to JS `);


const numA = 11;
const numB = 32;

const total = numA + numB;

console.log("The Total is :" + total);

//prettier.ignore

const nameList = [
    'GrimJow',
    'Luffy',
    'Goku',
    'Saitama'
]

function print(text){
    console.log(text);
}

function fancyPrint(text){
    console.log(`>>>> ☠️ <<<<< ${text} >>>> ☠️ <<<<<`);
}

const xyz = print;
console.log("😁" , xyz.name);

//nameList.forEach(print);

//prettier.ignore
nameList
    .sort()
    .reverse()
    .forEach(fancyPrint);
