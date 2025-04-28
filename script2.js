// ДЗ 17. массив объектов
// Создать массив объектов. В каждом объекте должна содержаться информация 
// о человеке: имя, пол, год рождения. Объектов должно быть 5-10.

// 1.посчитать средний возраст
// 2.определить представителей какого пола больше вывести ответы в консоль

let personData = [ 
  {userName: 'Клава', gender: 'woman', age: 98,},
  {userName: 'Пётр', gender: 'men', age: 8,},
  {userName: 'Валера', gender: 'men', age: 57,},
  {userName: 'Саша', gender: 'woman', age: 29,},
  {userName: 'Паша', gender: 'men',age: 45,},
];

let ryyAge = personData.reduce(function ( sum, current,) {
  return sum + current.age;
},0);


// let ryyAge = personData.reduce((sum, current) => sum + current.age, 0);
let resultAge = ryyAge / personData.length;

console.log(resultAge);

let genderCount = {woman: 0, men: 0,};

personData.forEach(personData => {
  if (personData.gender == 'woman' ) {
    genderCount.woman++
  } else if (personData.gender == 'men' ) {
    genderCount.men++
  }
}
)

if (genderCount.woman > genderCount.men) {
  console.log('Женщин больше')
} else if ( genderCount.men > genderCount.woman) {
  console.log('Мужчин больше')
} else {
  console.log('Ровно')
}
