// ДЗ 18. Сортировка

// Написать функцию которая сортирует слова в строке по цифре которая находится в слове.
// В рамках данной задачи цифры НЕ могут быть двухзначные и больше

// function sortWords(str) {
// 	??
// }
// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';


function sortWords (str) {
    let user = str.trim().split(' ')
    

    function searchForNumbers (numder) {
        for(let i = 0; i < numder.length; i++) {
            let userNumber  = numder[i];
            if (userNumber >= '0' && userNumber <= '9') {
                return(userNumber);
            }
        }
    }
    user.sort(function(a, b) {
        let numderA = searchForNumbers(a);
        let numderB = searchForNumbers(b);
        return numderA - numderB;
    });
     
    return user.join(' ');
}

alert(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce '));

