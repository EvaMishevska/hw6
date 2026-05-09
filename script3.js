// ДЗ 18. Сортировка

// Написать функцию которая сортирует слова в строке по цифре которая находится в слове.
// В рамках данной задачи цифры НЕ могут быть двухзначные и больше

// function sortWords(str) {
// 	??
// }
// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';


// function sortWords (str) {
//     let user = str.trim().split(' ')
    

//     function searchForNumbers (numder) {
//         for(let i = 0; i < numder.length; i++) {
//             let userNumber  = numder[i];
//             if (userNumber >= '0' && userNumber <= '9') {
//                 return(userNumber);
//             }
//         }
//     }
//     user.sort(function(a, b) {
//         let numderA = searchForNumbers(a);
//         let numderB = searchForNumbers(b);
//         return numderA - numderB;
//     });
     
//     return user.join(' ');
// }

// alert(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce '));


function sortWords(str) {
	if(!str) return '';

  let getNumber = (slovo) => { // ФУНКЦИЯ ИЩЕТ ЧИСЛА В СЛОВЕ
    for(let sumvol of slovo) { //ЦИКЛ ПЕРЕБИРАЕТ СЛОВА
      if(sumvol >= 0 && sumvol <= 9) return Number(sumvol); //ЕСЛИ БУКВА ЯВЛЯЕТСЯ ЦИФРОЙ ОТ 0 ДО 9
    }
    return 0; //ЕСЛИ ЦИФРЫ НЕТ!!
  };

  return str.trim().split(' ').sort((a, b) => getNumber(a) - getNumber(b)).join(' ');

}
alert(sortWords('A3lice 2Bob Er1nst')) // 'Er1nst 2Bob A3lice';

