function HashStorageFunc() {
    const hash = {};
    this.addValue = function  (key, value) {
        hash.a = 3;
        hash.b = 5;
    }
    thes.getValue = function (key) {
       alert(hash.a)
    }
    this.deleteValue = function (key) {
        delete hash.b;
    }
    this.getKeys = function  () {
        Object.keys(hesh);
    }
}

const coctailsStorage = new HashStorageFunc ();
console.log(coctailsStorage);






























// function HashStorageFunc () {
//     this.add = function addValue (key, value) {
//         key = prompt('Названия коктеля:');
//         coctailsStorage.key = {};
//         coctailsStorage.key.alcoholic = prompt('Алкогольный ли?' );
//         coctailsStorage.key.ingredients = prompt('Ингридиенты и их пропорции');
//         coctailsStorage.key.recipe = prompt ('Рецепт приготовления');
//     }

//     this.get = function getValue (key) {
//         key = prompt ('Названия коктеля:');
//         if (key in coctailsStorage) {
//             alert ('Коктейль' + key + '(алкогольный' + coctailsStorage.key.alcoholic+ ')\n' +
//             'Необходимые ингртдиенты: \n' + coctailsStorage.key.ingredients + '\n рецепт приготовления';
//         }
//         else {
//             alert ('Такого коктейля в списке нет');
//         }
//     }

//     this.delete = function deleteValue(key) {
//         key = prompt('Названия коктейля: ');
//         if(key in coctailsStorage) {
//             delete coctailsStorage.key;
//             alert('Удален');
//             console.log('true');
//         }
//         else{
//             alert('Такого коктеля в списке нет');
//             console.log('false');
//         }
//     }

//     this.onlyKeys = function getKeys(){
//         for(key in coctailsStorage) {
//             console.log(key);
//         }
//     }

//     const coctailsStorage = new HashStorageFunc ();
//     coctailsStorage = {'Маргарита': {alcoholic:'да', ingredients:'Водка, ликур\n' +
//     'лед', recipe : 'Наложите лед, налейте водки и ликера' },
//     'Пеликан' :{ alcoholic: 'нет', ingredients: 'Сок, сироп, банан, клубника, лед', recipe : 'положить в блендер и размешать'}}
// } 
















// const nam = prompt('Введите ваше имя');
// const growth = parseFloat (prompt('Введите ваш рост в метрах'));
// const mass = parseFloat (prompt('Введите ваш вес в кг'));

// const imt = mass/(growth*2);

// if (imt < 16.5) {
//     alert(`${nam} ${imt} Крайний недостаток веса. \nСпасибо что воспользовались нашим сервисам `);
//     // alert(nam);
//     // alert(imt);
//     // alert('крайний недостаток веса');
// }else if ( imt < 18.4) {
//     alert(`${nam} ${imt}  Недостаток веса. \nСпасибо что воспользовались нашим сервисам `);
//     // alert(nam);
//     // alert(imt);
//     // alert('недостаток веса');
// }else if ( imt < 24.9) {
//     alert(`${nam} ${imt}  Нормальный вес. \nСпасибо что воспользовались нашим сервисам `);
//     // alert(nam);
//     // alert(imt);
//     // alert('нормальный вес');
// }else if ( imt < 30) {
//     alert(`${nam} ${imt}  Избыточный вес. \nСпасибо что воспользовались нашим сервисам `);
//     // alert(nam);
//     // alert(imt);
//     // alert('избыточный вес')
// }else {
//     alert(`${nam} ${imt}  Очень избыточный вес. \nСпасибо что воспользовались нашим сервисам `);
//     // alert(nam);
//     // alert(imt);
//     // alert('очень избыточный вес');
// }