let output = {};
let newArrA = [];
let newArrB = [];
let newArrC = [];
let newArrD = [];
vaxTrail = (arr) =>{
    arr.forEach(item => 
        {
            if(item.age >= 20 && item.age <= 30 && item.temperature < 100){
                newArrA.push(item);
                output.A = newArrA;
            }
            else if(item.age >= 31 && item.age <= 40 && item.temperature < 100){
                newArrB.push(item);
                output.B = newArrB;
            }
            else if(item.age >= 41 && item.age <= 50 && item.temperature < 100){
                output.C = {...item};
                newArrC.push(item);
                output.C = newArrC;
            }
            if(item.temperature >= 100){
                newArrD.push(item);
                output.D = newArrD;
            }
        });
        console.log(output);
}

const arr = [
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },];
console.log(vaxTrail(arr));