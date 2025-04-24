// ДЗ 16. Array compress
// Написать программу, которая сжимает серии массива, состоящего из единиц
// и нулей по следующему принципу, например:
// массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1] преобразуется в [4,7,2,4]
// массив [0,0,1,1,1,1,0,1,1,1] преобразуется в [2,4,1,3]

let arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
let result = [];
let count = 0;
let current = arr[0]
    

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === current) {
        count++;
    } else {
        result.push(count);
        current = arr[i];
        count = 1;
    }
}

result.push(count);
console.log(result);