// ЗАДАНИЕ 1
/*Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.*/

function calc (a, b, c) {
    console.log((a-b)/c);
}
calc (9, 3, 2);


//ЗАДАНИЕ 2
/*Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.*/
function pow(x) {
    return Math.pow(x, 2);
}
console.log (pow(2));

//ЗАДАНИЕ 3
/*Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log (min(2, 5));

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log (max(2, 5));

//ЗАДАНИЕ 4
/* Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.*/

let minNum = +prompt ('Введите минимальное число диапозона'); // может стоит поместить во внутрь функции?
let maxNum = +prompt ('Введите максимальное число диапозона'); // может стоит поместить во внутрь функции?

function getArrNums () {
    let arr = [];

    for (let i = minNum; i <= maxNum; i++) {
        arr.push(i);
    }
    return arr;
}

let result = getArrNums (minNum, maxNum);

function showArrNums () {
    console.log (result);
}

showArrNums (result);

//ЗАДАНИЕ 5
/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.*/

function isEven (n) {

    return result = (n % 2 == 0);

}
console.log(isEven (8));


//ЗАДАНИЕ 6
/* Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/

function numsArr(array) {

    let newArr = [];

    for (let n = 0; n < array.length; n++) {

        isEven (array[n]);
        if (result == true) {
            newArr.push(array[n]);
        }

    }
    console.log(newArr);
}

console.log(numsArr([2, 5, 8, 7, 4]));


//ЗАДАНИЕ 8
/* Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.*/

function triangle(h) {

    let str = '';

    for (let i = 1; i <= h; i++) {
        str = '';

        for (let k = 1; k <= (h-i); k++) {
            str += ' ';
        }

        for (let j = 1; j <= (i + (i-1)); j++) {
            str += '^';
        }

        console.log(str);
        // document.write('<pre>' + str + '<br></pre>');
    }
}    
triangle(7);

function invertTriangle(h) {

    let str = '';

    for (let i = h; i >= 1; i--) {
        str = '';

        for (let k = (h-i); k >= 1; k--) {
            str += ' ';
        }

        for (let j = (i + (i-1)); j >= 1; j--) {
            str += '^';
        }

        console.log(str);
        // document.write('<pre>' + str + '<br></pre>');
    }
}    
invertTriangle(7);


//ЗАДАНИЕ 11
/* Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/

function printArray (array) {
    console.log(array[i]);
    i++;

    if (i < array.length) printArray(array);
}

let i = 0;
printArray([3, 8, 7, 2, 15]);

